# Weenas Homepage

Weenas 官方网站 —— 纯静态站点（HTML / CSS / JS），无需构建，支持中英双语切换、移动端适配与深色模式。

## 目录结构

```
index.html            页面结构
assets/css/style.css  样式
assets/js/content.js  全部中英文文案（修改内容只需改这里）
assets/js/main.js     语言切换、渲染与交互逻辑
assets/img/logo.svg   Logo / favicon
```

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 修改内容

所有文字都在 `assets/js/content.js` 中，按 `zh` / `en` 分开维护。标注 `TODO` 的是占位文案，请替换为真实信息：

- 标语与公司简介
- 统计数据（`about.stats`，设为空数组即可隐藏）
- 业务列表（`services.items`，可增减条目）
- 联系邮箱与地址

语言默认跟随浏览器语言，用户手动切换后会记住选择。

## 部署

站点是纯静态文件，可直接部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任意静态服务器（上传仓库根目录即可）。
