(function () {
  "use strict";

  var content = window.SITE_CONTENT;
  var STORAGE_KEY = "weenas-lang";
  var LANGS = { zh: "zh-CN", en: "en" };

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

  function renderProject(p, lang) {
    var card = el("article", "project");

    var head = el("div", "project-head");
    var logo = el("div", "project-logo");
    if (p.logoBg) logo.style.background = p.logoBg;
    var img = el("img");
    img.src = p.logo;
    img.alt = "";
    img.width = 56;
    img.height = 56;
    logo.appendChild(img);
    head.appendChild(logo);

    var titles = el("div");
    var h3 = el("h3");
    var nameLink = el("a", null, p.name[lang]);
    nameLink.href = p.links[0].url;
    h3.appendChild(nameLink);
    titles.appendChild(h3);
    titles.appendChild(el("p", "project-tagline", p.tagline[lang]));
    head.appendChild(titles);
    card.appendChild(head);

    card.appendChild(el("p", "project-desc", p.description[lang]));

    var tags = el("ul", "tags");
    p.tags[lang].forEach(function (t) { tags.appendChild(el("li", null, t)); });
    card.appendChild(tags);

    var actions = el("div", "project-actions");
    p.links.forEach(function (l) {
      var a = el("a", "btn btn-" + l.kind, l.label[lang]);
      a.href = l.url;
      actions.appendChild(a);
    });
    card.appendChild(actions);

    return card;
  }

  function renderProjects(t, lang) {
    var list = document.getElementById("project-list");
    list.textContent = "";
    content.projects.forEach(function (p) { list.appendChild(renderProject(p, lang)); });
    list.appendChild(el("div", "project project-more", t.projects.more));
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

    renderProjects(t, lang);
    document.getElementById("lang-toggle").textContent = t.langToggle;
  }

  var lang = readLang();
  apply(lang);
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    saveLang(lang);
    apply(lang);
  });

  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
