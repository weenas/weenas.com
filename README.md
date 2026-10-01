# weenas.com

[weenas.com](https://weenas.com) 的源码：Weenas 所有项目的索引页。用 [Astro](https://astro.build) 生成纯静态页面，支持中英双语、移动端与深色模式。

与 [castbay.weenas.com](https://castbay.weenas.com) 一致：英文为主语言，放在根目录 `/`；中文放在 `/zh/`。

目前收录的项目：

- **映湾 CastBay**：Android 电视投屏接收器（AirPlay / DLNA），[castbay.weenas.com](https://castbay.weenas.com) · [GitHub](https://github.com/weenas/castbay)

## 目录结构

```
src/data/site.ts           站点信息与中英文界面文字
src/data/projects.ts       项目列表（中英文内容、图标、链接）
src/components/Home.astro  主页模板，中英文共用
src/components/Seo.astro   <head> 里的 SEO 标签：title、description、canonical、hreflang、OG / Twitter
src/layouts/Base.astro     页面骨架：favicon、内联 boot.js、全局样式
src/pages/index.astro      英文主页（/）
src/pages/zh/index.astro   中文主页（/zh/）
src/pages/404.astro        404 页面（Cloudflare Pages 会自动使用 404.html）
src/pages/sitemap.xml.ts   生成 /sitemap.xml（含 hreflang）
src/styles/global.css      样式（构建时内联进页面）
src/scripts/boot.js        主题与语言跳转，内联在 <head> 中执行，避免闪烁
src/scripts/main.js        主题按钮等交互
public/                    原样发布的静态文件：
  brand-assets/            Weenas Logo（SVG 母版与 PNG 导出）、favicon 与品牌说明
  assets/img/og-image.png  社交分享图（1200×630）
  assets/img/projects/     各项目图标（castbay-light/-dark.svg 取自 AndroPlay 仓库 branding/castbay-signal-final/symbol-light/-dark.svg）
  robots.txt               搜索引擎抓取说明
  _headers                 Cloudflare Pages 响应头（缓存、安全）
```

首页使用 `public/brand-assets/svg/` 下的矢量 Logo，深色主题下显示反白版；右上角可切换主题（跟随系统 / 浅色 / 深色，默认跟随系统），并接入 favicon、Apple Touch Icon、Web Manifest 和社交分享图片，详见 [品牌说明](public/brand-assets/README.md)。

## 本地开发

需要 Node.js 22.12 或更新版本。

```bash
npm install
npm run dev       # 开发服务器：http://localhost:4321（英文）、/zh/（中文）
npm run build     # 生成静态文件到 dist/
npm run preview   # 预览 dist/
```

## 新增项目

1. 把项目图标放到 `public/assets/img/projects/`，浅色背景和深色背景各一个（如 `<id>-light.svg`、`<id>-dark.svg`）。
2. 在 `src/data/projects.ts` 的 `PROJECTS` 里照 CastBay 追加一项，填好中英文内容。中英文主页的卡片和 JSON-LD 结构化数据会自动生成。
3. 更新 `src/data/site.ts` 里的 `updated` 日期（即 sitemap 的 `lastmod`）。

## SEO

- 英文 `/` 与中文 `/zh/` 各是独立页面，互相用 `hreflang` 标注（`x-default` 为英文），`/sitemap.xml` 中也列出对应关系；正文在构建时直接生成到 HTML 里，不依赖 JS 渲染。
- 每页有独立的 title、description、canonical、Open Graph / Twitter 分享卡片，以及 Organization、WebSite 和项目列表（ItemList + SoftwareApplication）结构化数据；404 页标记为 `noindex`。
- 性能：CSS 和主题脚本内联进 HTML，首屏不需要额外请求；Logo 带宽高，避免布局偏移；`/_astro/` 下带哈希的文件设置长期缓存。
- 浏览器语言为中文（或手动选过中文）的访客打开英文页时，`boot.js` 会跳转到 `/zh/`；点「English」后会记住选择。搜索引擎抓取不受影响。
- 部署上线后，建议在 Google Search Console、Bing Webmaster Tools、百度搜索资源平台验证 weenas.com 并提交 `https://weenas.com/sitemap.xml`。

## 部署

用 Cloudflare Pages 部署：框架预设选 Astro，构建命令 `npm run build`，输出目录 `dist`，Node 版本由 `.node-version` 指定。再把 `weenas.com` 和 `www.weenas.com` 绑定为自定义域名。
