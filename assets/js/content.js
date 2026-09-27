/*
 * 网站文案（中英双语）。
 * 所有页面文字都在这里维护，修改后刷新页面即可生效。
 * 标注 TODO 的内容为占位文案，请替换为 Weenas 的真实信息。
 *
 * services.items[].icon 可选值：design / code / cloud / chart / shield / users
 */
window.SITE_CONTENT = {
  // TODO: 替换为真实联系邮箱
  email: "hello@weenas.com",

  zh: {
    meta: { title: "Weenas", description: "Weenas 官方网站" },
    nav: { about: "关于我们", services: "业务", why: "优势", contact: "联系" },
    hero: {
      eyebrow: "Weenas",
      // TODO: 一句话介绍 Weenas
      title: "用技术，让复杂的事变简单",
      subtitle: "我们专注于为客户打造可靠、易用的数字产品与解决方案。",
      cta: "联系我们",
      secondary: "了解业务"
    },
    about: {
      title: "关于我们",
      // TODO: 公司简介
      body1: "Weenas 是一支专注于产品与技术的团队，致力于把好的想法变成真正可用的产品。",
      body2: "我们相信简单、专注和长期主义，与客户一起持续打磨每一个细节。",
      // TODO: 替换为真实数据，或删除此数组以隐藏统计模块
      stats: [
        { value: "2014", label: "成立于" },
        { value: "50+", label: "服务客户" },
        { value: "100+", label: "交付项目" }
      ]
    },
    services: {
      title: "我们的业务",
      subtitle: "从构思到上线，覆盖产品的完整生命周期。",
      // TODO: 替换为真实业务
      items: [
        { icon: "design", title: "产品设计", body: "用户研究、交互与视觉设计，打造好用又好看的产品体验。" },
        { icon: "code", title: "软件开发", body: "Web、移动端与后端服务开发，稳定可靠、易于扩展。" },
        { icon: "cloud", title: "云与运维", body: "云架构设计、部署与持续运维，保障业务平稳运行。" }
      ]
    },
    why: {
      title: "为什么选择 Weenas",
      items: [
        { title: "专注", body: "小而精的团队，每个项目都由核心成员直接负责。" },
        { title: "透明", body: "清晰的节奏与沟通，进度与风险随时可见。" },
        { title: "长期", body: "上线只是开始，我们持续陪伴产品成长。" }
      ]
    },
    contact: {
      title: "联系我们",
      body: "有项目想法或合作意向？欢迎随时来信，我们会尽快回复。",
      emailLabel: "邮箱",
      addressLabel: "地址",
      // TODO: 替换为真实地址
      address: "中国"
    },
    footer: { rights: "保留所有权利。" },
    langToggle: "EN"
  },

  en: {
    meta: { title: "Weenas", description: "Official website of Weenas" },
    nav: { about: "About", services: "Services", why: "Why us", contact: "Contact" },
    hero: {
      eyebrow: "Weenas",
      title: "Technology that makes the complex simple",
      subtitle: "We build reliable, easy-to-use digital products and solutions for our clients.",
      cta: "Get in touch",
      secondary: "Our services"
    },
    about: {
      title: "About us",
      body1: "Weenas is a product and engineering team dedicated to turning good ideas into products people actually use.",
      body2: "We believe in simplicity, focus and the long game, refining every detail together with our clients.",
      stats: [
        { value: "2014", label: "Founded" },
        { value: "50+", label: "Clients" },
        { value: "100+", label: "Projects delivered" }
      ]
    },
    services: {
      title: "What we do",
      subtitle: "From concept to launch, across the whole product lifecycle.",
      items: [
        { icon: "design", title: "Product design", body: "User research, interaction and visual design for products that work and look great." },
        { icon: "code", title: "Software development", body: "Web, mobile and backend development that is stable, reliable and built to scale." },
        { icon: "cloud", title: "Cloud & operations", body: "Cloud architecture, deployment and ongoing operations to keep your business running." }
      ]
    },
    why: {
      title: "Why Weenas",
      items: [
        { title: "Focused", body: "A small, senior team: every project is owned directly by core members." },
        { title: "Transparent", body: "Clear cadence and communication, with progress and risks always visible." },
        { title: "Long-term", body: "Launch is just the beginning. We stay with your product as it grows." }
      ]
    },
    contact: {
      title: "Contact us",
      body: "Have a project in mind or want to work together? Drop us a line and we'll get back to you soon.",
      emailLabel: "Email",
      addressLabel: "Address",
      address: "China"
    },
    footer: { rights: "All rights reserved." },
    langToggle: "中文"
  }
};
