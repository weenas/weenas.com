/*
 * Colour theme: "auto" (follow the system, the default), "light" or "dark".
 * Loaded in <head> so the theme is set before the page paints.
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
