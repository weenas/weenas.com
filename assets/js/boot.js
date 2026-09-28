/*
 * Runs in <head>, before the page paints, so the theme never flickers and a
 * language redirect happens before anything shows.
 *
 * Colour theme: "auto" (follow the system, the default), "light" or "dark".
 * <html data-theme> always holds the resolved theme, light or dark.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "weenas-theme";
  var PREFS = ["auto", "light", "dark"];
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var listeners = [];

  function readPref() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (PREFS.indexOf(saved) >= 0) return saved;
    } catch (e) { /* storage unavailable */ }
    return "auto";
  }

  var pref = readPref();

  function resolve() {
    if (pref !== "auto") return pref;
    return media && media.matches ? "dark" : "light";
  }

  function apply() {
    document.documentElement.setAttribute("data-theme", resolve());
    listeners.forEach(function (fn) { fn(pref); });
  }

  if (media) {
    var onSystemChange = function () { if (pref === "auto") apply(); };
    if (media.addEventListener) media.addEventListener("change", onSystemChange);
    else if (media.addListener) media.addListener(onSystemChange);
  }

  window.WeenasTheme = {
    get: function () { return pref; },
    set: function (next) {
      pref = PREFS.indexOf(next) >= 0 ? next : "auto";
      try {
        if (pref === "auto") localStorage.removeItem(STORAGE_KEY);
        else localStorage.setItem(STORAGE_KEY, pref);
      } catch (e) { /* storage unavailable: still switches for this visit */ }
      apply();
    },
    next: function () {
      this.set(PREFS[(PREFS.indexOf(pref) + 1) % PREFS.length]);
    },
    onChange: function (fn) { listeners.push(fn); }
  };

  apply();
})();

/*
 * Each language has its own page: English at /, Chinese under /zh/ (as on
 * castbay.weenas.com). English pages send visitors who prefer Chinese (chosen
 * with the language link, or else their browser's language) to the Chinese
 * page; choosing English with the link is remembered.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "weenas-lang";

  function saved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  var browserChinese = (navigator.language || "").toLowerCase().indexOf("zh") === 0;
  var preferred = saved() || (browserChinese ? "zh" : "en");
  // Only English pages that declare a Chinese version redirect, to exactly that page.
  var chinese = document.querySelector('link[rel="alternate"][hreflang="zh-CN"]');
  if (preferred === "zh" && document.documentElement.lang === "en" && chinese) {
    var target = new URL(chinese.href, location.href);
    if (target.pathname !== location.pathname) {
      location.replace(target.pathname + location.hash);
      return;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang-link]").forEach(function (link) {
      link.addEventListener("click", function () {
        try { localStorage.setItem(STORAGE_KEY, link.getAttribute("data-lang-link")); }
        catch (e) { /* storage unavailable: the link still works */ }
      });
    });
  });
})();
