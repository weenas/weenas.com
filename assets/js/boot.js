/*
 * Runs in <head>, before the page paints, so neither the theme nor the
 * language flickers.
 *
 * Colour theme: "auto" (follow the system, the default), "light" or "dark".
 * <html data-theme> always holds the resolved theme, light or dark.
 *
 * Language: the page carries both Chinese and English text (.zh / .en);
 * <html data-lang> picks which one shows. Without JS, Chinese shows.
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

(function () {
  "use strict";

  var STORAGE_KEY = "weenas-lang";
  var LANGS = { zh: "zh-CN", en: "en" };

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  var lang = readLang();
  var listeners = [];

  function apply() {
    var root = document.documentElement;
    root.lang = LANGS[lang];
    root.setAttribute("data-lang", lang);
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
    listeners.forEach(function (fn) { fn(lang); });
  }

  window.WeenasLang = {
    get: function () { return lang; },
    toggle: function () {
      lang = lang === "zh" ? "en" : "zh";
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
      apply();
    },
    onChange: function (fn) { listeners.push(fn); }
  };

  apply();
})();
