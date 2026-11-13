// Projects shown on the homepage, in display order. Adding one here adds its
// card to both languages and its SoftwareApplication entry to the JSON-LD.
import type { Lang } from "./site";

interface ProjectText {
  name: string;
  /** Other name for structured data (e.g. the name in the other language). */
  alternateName?: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  labels: { site: string; source?: string; download?: string };
  priceCurrency: string;
}

export interface Project {
  id: string;
  /** Icons in public/assets/img/projects/, for light and dark backgrounds. */
  icon: { light: string; dark: string };
  /** Tile colours behind the icon. */
  tile: { light: string; dark: string };
  source?: string;
  download?: string;
  applicationCategory: string;
  operatingSystem: string;
  text: Record<Lang, ProjectText>;
}

export const PROJECTS: Project[] = [
  {
    id: "castbay",
    icon: { light: "/assets/img/projects/castbay-light.svg", dark: "/assets/img/projects/castbay-dark.svg" },
    tile: { light: "#F7F3FF", dark: "#181225" },
    source: "https://github.com/weenas/castbay",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Android TV 8.0+",
    text: {
      en: {
        name: "CastBay",
        alternateName: "映湾",
        tagline: "A casting receiver for Android TV",
        description: "Lets an Android TV receive AirPlay screen mirroring, music and video from iPhone, iPad and Mac, plus the cast button in video and music apps (DLNA). Free, open source, no ads.",
        tags: ["Android TV", "AirPlay", "DLNA", "Open source"],
        url: "https://castbay.weenas.com/",
        labels: { site: "Visit website", source: "Source" },
        priceCurrency: "USD",
      },
      zh: {
        name: "映湾 CastBay",
        alternateName: "CastBay",
        tagline: "Android 电视投屏接收器",
        description: "让 Android 电视接收 iPhone、iPad、Mac 的 AirPlay 屏幕镜像、音乐和视频，也支持视频和音乐 App 自带的投屏按钮（DLNA）。免费、开源、无广告。",
        tags: ["Android TV", "AirPlay", "DLNA", "开源"],
        url: "https://castbay.weenas.com/zh/",
        labels: { site: "访问官网", source: "源码" },
        priceCurrency: "CNY",
      },
    },
  },
  {
    id: "gamebay",
    icon: { light: "/assets/img/projects/gamebay-light.svg", dark: "/assets/img/projects/gamebay-dark.svg" },
    tile: { light: "#EAF0FF", dark: "#1D2633" },
    applicationCategory: "GameApplication",
    operatingSystem: "Web, Android TV",
    text: {
      en: {
        name: "GameBay",
        alternateName: "游乐湾",
        tagline: "A game platform for Android TV and the web",
        description: "Browse, discover and play lightweight games on Android TV or in a web browser, with support for TV remotes, gamepads and keyboards.",
        tags: ["Browser games", "Android TV", "Gamepad"],
        url: "https://gamebay.weenas.com/",
        labels: { site: "Visit website" },
        priceCurrency: "USD",
      },
      zh: {
        name: "游乐湾 GameBay",
        alternateName: "GameBay",
        tagline: "面向安卓电视和网页的小游戏平台",
        description: "在安卓电视或浏览器中浏览、发现并游玩轻量小游戏，支持电视遥控器、手柄和键盘操作。",
        tags: ["网页小游戏", "Android TV", "手柄"],
        url: "https://gamebay.weenas.com/",
        labels: { site: "访问 GameBay" },
        priceCurrency: "CNY",
      },
    },
  },
];
