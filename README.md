# weenas.com

[weenas.com](https://weenas.com) 的源码：Weenas 所有项目的索引页。纯静态站点（HTML / CSS / JS），无需构建，支持中英双语、移动端与深色模式。

目前收录的项目：

- **映湾 CastBay**：Android 电视投屏接收器（AirPlay / DLNA），[castbay.weenas.com](https://castbay.weenas.com) · [GitHub](https://github.com/weenas/castbay)

## 目录结构

```
index.html              页面结构
assets/css/style.css    样式
assets/js/content.js    中英文文案与项目列表（增删项目只需改这里）
assets/js/main.js       语言切换与渲染逻辑
brand-assets/           当前 Weenas Logo、favicon、社交分享图片与品牌说明
assets/img/projects/    各项目图标（castbay.svg 取自 castbay 仓库 branding/cb-monogram-dark.svg）
```

首页使用 `brand-assets/` 下的 PNG Logo，并接入 favicon、Apple Touch Icon、Web Manifest 和社交分享图片。当前品牌素材是带浅色背景的位图，详见 [品牌说明](brand-assets/README.md)。部署时需包含整个 `brand-assets/` 目录。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 新增项目

1. 把项目图标放到 `assets/img/projects/<id>.svg`（或 png）。
2. 在 `assets/js/content.js` 的 `projects` 数组里追加一项，字段参照 CastBay：
   `name`、`tagline`、`description`、`tags` 都分 `zh` / `en`；`links` 的第一项是主链接（项目名也链到它）。

## 部署

站点是纯静态文件，把仓库根目录发布出去即可。建议和 CastBay 一样用 Cloudflare Pages：构建命令留空，输出目录为 `/`，再把 `weenas.com` 绑定为自定义域名。
