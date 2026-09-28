(function () {
  "use strict";

  var Theme = window.WeenasTheme;
  var Lang = window.WeenasLang;

  var THEME_TEXT = {
    zh: { label: "主题", auto: "跟随系统", light: "浅色", dark: "深色", hint: "点击切换" },
    en: { label: "Theme", auto: "System", light: "Light", dark: "Dark", hint: "click to change" }
  };

  // Line icons for the theme button: follow system / light / dark.
  var THEME_ICONS = {
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
  };

  var themeButton = document.getElementById("theme-toggle");

  function renderThemeToggle() {
    var en = Lang.get() === "en";
    var t = THEME_TEXT[Lang.get()];
    var pref = Theme.get();
    var label = t.label + (en ? ": " : "：") + t[pref];
    themeButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + THEME_ICONS[pref] + "</svg>";
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label + (en ? " (" + t.hint + ")" : "（" + t.hint + "）");
  }

  renderThemeToggle();
  Theme.onChange(renderThemeToggle);
  Lang.onChange(renderThemeToggle);
  themeButton.addEventListener("click", function () { Theme.next(); });
  document.getElementById("lang-toggle").addEventListener("click", function () { Lang.toggle(); });

  document.getElementById("year").textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
