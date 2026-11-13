// Site-wide facts and the text that differs between the English and Chinese pages.

export const SITE = {
  url: "https://weenas.com",
  name: "Weenas",
  github: "https://github.com/weenas",
  email: "public@weenas.com",
  themeColor: "#061B3C",
  ogImage: { path: "/assets/img/og-image.png", width: 1200, height: 630 },
  logo: "/brand-assets/png/weenas-app-icon-square-512.png",
  // Bump when the page content changes; used as <lastmod> in the sitemap.
  updated: "2026-11-13",
};

export type Lang = "en" | "zh";

export const LANGS: Record<Lang, { path: string; hreflang: string; ogLocale: string }> = {
  en: { path: "/", hreflang: "en", ogLocale: "en_US" },
  zh: { path: "/zh/", hreflang: "zh-CN", ogLocale: "zh_CN" },
};

export const DEFAULT_LANG: Lang = "en";

export const UI = {
  en: {
    title: "Weenas: CastBay, GameBay and Other Projects",
    description: "Projects by Weenas, including CastBay, a free, open-source AirPlay and DLNA receiver for Android TV, and GameBay, a game platform for Android TV and the web.",
    ogDescription: "Meet CastBay, an AirPlay and DLNA receiver for Android TV, and GameBay, a game platform for Android TV and the web.",
    ogImageAlt: "Weenas logo with the text: CastBay, GameBay and other projects by Weenas",
    navLabel: "Main",
    navProjects: "Projects",
    heading: "Projects by Weenas",
    lead: "Everything we build, in one place.",
    more: "More projects coming soon",
    rights: "All rights reserved.",
    contact: "Contact",
    switchTo: "zh" as Lang,
    switchLabel: "中文",
  },
  zh: {
    title: "Weenas：映湾 CastBay、游乐湾 GameBay 等项目",
    description: "Weenas 的软件项目，包括映湾 CastBay（免费开源的安卓电视 AirPlay 与 DLNA 投屏接收器）和游乐湾 GameBay（面向安卓电视和网页的小游戏平台）。",
    ogDescription: "了解映湾 CastBay 投屏接收器，以及面向安卓电视和网页的游乐湾 GameBay 小游戏平台。",
    ogImageAlt: "Weenas Logo，配文：映湾 CastBay、游乐湾 GameBay 等项目",
    navLabel: "主导航",
    navProjects: "项目",
    heading: "Weenas 的项目",
    lead: "我们做的软件，都在这里。",
    more: "更多项目，敬请期待",
    rights: "保留所有权利。",
    contact: "联系邮箱",
    switchTo: "en" as Lang,
    switchLabel: "English",
  },
} satisfies Record<Lang, unknown>;
