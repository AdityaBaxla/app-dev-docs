import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Application Development',
  description: 'Documentation for AppDev Projects and Theory',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Appdev I', link: '/Appdev_I/Project/' },
      { text: 'Appdev II', link: '/Appdev_II/Project/' }
    ],

    sidebar: [
      {
        text: 'Appdev I',
        items: [
          { text: 'Project', link: '/Appdev_I/Project/' },
          { text: 'Theory', link: '/Appdev_I/Theory/' }
        ]
      },
      {
        text: 'Appdev II',
        items: [
          { text: 'Project', link: '/Appdev_II/Project/' },
          { text: 'Theory', link: '/Appdev_II/Theory/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdityaBaxla/app-dev-docs' }
    ]
  },
  markdown: {
    // If you want auto-sidebar generation for deeply nested structures,
    // use this setting:
    sidebar: {
      '/Appdev_I/': 'auto',
      '/Appdev_II/': 'auto',
    }
  }
})
