# weenas.com

[weenas.com](https://weenas.com) 的源码：Weenas 所有项目的索引页。纯静态站点（HTML / CSS / JS），无需构建，支持中英双语、移动端与深色模式。

与 [castbay.weenas.com](https://castbay.weenas.com) 一致：英文为主语言，放在根目录 `/`；中文放在 `/zh/`。

目前收录的项目：

- **映湾 CastBay**：Android 电视投屏接收器（AirPlay / DLNA），[castbay.weenas.com](https://castbay.weenas.com) · [GitHub](https://github.com/weenas/castbay)

## 目录结构

```
index.html              英文主页（/）
zh/index.html           中文主页（/zh/）
assets/css/style.css    样式
assets/js/boot.js       主题与语言跳转（在 <head> 中加载，避免闪烁）
assets/js/main.js       主题按钮
assets/img/og-image.png 社交分享图（1200×630）
404.html                404 页面（Cloudflare Pages 会自动使用）
robots.txt, sitemap.xml 搜索引擎抓取说明与站点地图
brand-assets/           Weenas Logo（SVG 母版与 PNG 导出）、favicon 与品牌说明
assets/img/projects/    各项目图标（castbay-light/-dark.svg 取自 AndroPlay 仓库 branding/castbay-signal-final/symbol-light/-dark.svg）
```

首页使用 `brand-assets/svg/` 下的矢量 Logo，深色主题下显示反白版；右上角可切换主题（跟随系统 / 浅色 / 深色，默认跟随系统，由 `assets/js/boot.js` 处理），并接入 favicon、Apple Touch Icon、Web Manifest 和社交分享图片，详见 [品牌说明](brand-assets/README.md)。部署时需包含整个 `brand-assets/` 目录。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000（英文）或 http://localhost:8000/zh/（中文）
```

## 新增项目

1. 把项目图标放到 `assets/img/projects/<id>.svg`（或 png）。
2. 在 `index.html`（英文）和 `zh/index.html`（中文）里各复制一份 CastBay 的 `<article class="project">`，改图标、文字和链接；中文页链接到项目的中文页面（如有）。
3. 在两个页面的 JSON-LD（`<script type="application/ld+json">`）里照 CastBay 追加一个 `SoftwareApplication`，并更新 `sitemap.xml` 的 `lastmod`。

## SEO

- 英文 `/` 与中文 `/zh/` 各是独立页面，互相用 `hreflang` 标注（`x-default` 为英文），sitemap 中也列出对应关系；正文直接写在 HTML 里，不依赖 JS 渲染。
- 浏览器语言为中文（或手动选过中文）的访客打开英文页时，`boot.js` 会跳转到 `/zh/`；点「English」后会记住选择。搜索引擎抓取不受影响。
- `<head>` 含标题、描述、canonical、Open Graph / Twitter 分享卡片，以及 Organization、WebSite、SoftwareApplication 结构化数据。
- 部署上线后，建议在 Google Search Console、Bing Webmaster Tools、百度搜索资源平台验证 weenas.com 并提交 `https://weenas.com/sitemap.xml`。

## 部署

站点是纯静态文件，把仓库根目录发布出去即可。建议和 CastBay 一样用 Cloudflare Pages：构建命令留空，输出目录为 `/`，再把 `weenas.com` 绑定为自定义域名。
