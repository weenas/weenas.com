/*
 * 网站文案（中英双语）与项目列表。
 * 新增项目：在 projects 数组里加一项，并把图标放到 assets/img/projects/。
 */
window.SITE_CONTENT = {
  github: "https://github.com/weenas",

  projects: [
    {
      id: "castbay",
      name: { zh: "映湾 CastBay", en: "CastBay" },
      logo: "assets/img/projects/castbay.svg",
      // 图标背景色，与 CastBay App 的夜色背景一致
      logoBg: "#0b0910",
      tagline: {
        zh: "Android 电视投屏接收器",
        en: "A casting receiver for Android TV"
      },
      description: {
        zh: "让 Android 电视接收 iPhone、iPad、Mac 的 AirPlay 屏幕镜像、音乐和视频，也支持视频和音乐 App 自带的投屏按钮（DLNA）。免费、开源、无广告。",
        en: "Lets an Android TV receive AirPlay screen mirroring, music and video from iPhone, iPad and Mac, plus the cast button in video and music apps (DLNA). Free, open source, no ads."
      },
      tags: {
        zh: ["Android TV", "AirPlay", "DLNA", "开源"],
        en: ["Android TV", "AirPlay", "DLNA", "Open source"]
      },
      links: [
        { kind: "primary", url: "https://castbay.weenas.com", label: { zh: "访问官网", en: "Visit website" } },
        { kind: "ghost", url: "https://github.com/weenas/castbay", label: { zh: "源码", en: "Source" } },
        { kind: "ghost", url: "https://github.com/weenas/castbay/releases", label: { zh: "下载", en: "Download" } }
      ]
    }
  ],

  zh: {
    meta: { title: "Weenas", description: "Weenas 的项目：映湾 CastBay 等。" },
    nav: { projects: "项目" },
    hero: {
      title: "Weenas 的项目",
      subtitle: "我们做的软件，都在这里。"
    },
    projects: { title: "项目", more: "更多项目，敬请期待" },
    footer: { rights: "保留所有权利。" },
    langToggle: "English"
  },

  en: {
    meta: { title: "Weenas", description: "Projects by Weenas, including CastBay." },
    nav: { projects: "Projects" },
    hero: {
      title: "Projects by Weenas",
      subtitle: "Everything we build, in one place."
    },
    projects: { title: "Projects", more: "More projects coming soon" },
    footer: { rights: "All rights reserved." },
    langToggle: "中文"
  }
};
