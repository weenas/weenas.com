(function () {
  "use strict";

  var content = window.SITE_CONTENT;
  var STORAGE_KEY = "weenas-lang";
  var LANGS = { zh: "zh-CN", en: "en" };

  // Feather-style line icons (24x24, stroke = currentColor)
  var ICONS = {
    design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS.design) + "</svg>";
  }

  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o && o[k]; }, obj);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && content[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  function renderStats(t) {
    var list = document.getElementById("stats");
    list.textContent = "";
    var stats = t.about.stats || [];
    list.hidden = stats.length === 0;
    stats.forEach(function (s) {
      var li = el("li");
      li.appendChild(el("strong", null, s.value));
      li.appendChild(el("span", null, s.label));
      list.appendChild(li);
    });
  }

  function renderServices(t) {
    var wrap = document.getElementById("service-cards");
    wrap.textContent = "";
    t.services.items.forEach(function (s) {
      var card = el("article", "card");
      var iconBox = el("div", "card-icon");
      iconBox.innerHTML = icon(s.icon);
      card.appendChild(iconBox);
      card.appendChild(el("h3", null, s.title));
      card.appendChild(el("p", null, s.body));
      wrap.appendChild(card);
    });
  }

  function renderWhy(t) {
    var list = document.getElementById("why-list");
    list.textContent = "";
    t.why.items.forEach(function (w) {
      var li = el("li");
      li.appendChild(el("h3", null, w.title));
      li.appendChild(el("p", null, w.body));
      list.appendChild(li);
    });
  }

  function apply(lang) {
    var t = content[lang];
    document.documentElement.lang = LANGS[lang];
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", t.meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = get(t, node.getAttribute("data-i18n"));
      if (value != null) node.textContent = value;
    });

    renderStats(t);
    renderServices(t);
    renderWhy(t);

    document.getElementById("lang-toggle").textContent = t.langToggle;
  }

  var lang = readLang();
  apply(lang);

  var email = document.getElementById("contact-email");
  email.textContent = content.email;
  email.href = "mailto:" + content.email;
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    saveLang(lang);
    apply(lang);
  });

  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!nav.classList.contains("open"));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });

  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
