import { defineConfig } from "vitepress";

export default defineConfig({
  title: "枫的博客",
  description: "map7e 的个人博客",

  lang: "zh-CN",

  themeConfig: {
    siteTitle: "枫的博客",

    nav: [
      { text: "首页", link: "/" },
      { text: "第一篇", link: "/posts/first-post" },
      { text: "主站", link: "https://www.map7e.com" }
    ],

    sidebar: [
      {
        text: "博客",
        items: [
          { text: "第一篇博客", link: "/posts/first-post" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/qaz492888660" }
    ],

    footer: {
      message: "Powered by VitePress",
      copyright: "Copyright © 2026 枫"
    }
  }
});