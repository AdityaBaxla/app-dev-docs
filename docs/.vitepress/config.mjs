import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "App Dev Docs",
  description: "All content for App Dev I & II",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code', link: '/project/code-examples' }
    ],

    sidebar: [
      {
        text: 'Navigate',
        items: [
          { text: 'Project Statment', link: '/project/project-statement' },
          { text: 'Code Examples', link: '/project/code-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdityaBaxla/app-dev-docs' }
    ]
  }
})
