import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Application Development',
  description: 'Documentation for AppDev Projects and Theory',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Appdev I', link: '/appdev-I-index' },
      { text: 'Appdev II', link: '/appdev-II-index' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: {
      // Sidebar for the "appdevI" section
      '/appdev-I/': [
        {
          text: 'Reference',
          items: [
            // { text: 'Introduction', link: '/reference/' },
            // { text: 'CLI', link: '/reference/cli' },
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],
      // Sidebar for appdevI project section
      '/appdev-I-project/': [
        {
          text: 'Reference',
          items: [
            // { text: 'Introduction', link: '/guide/' },
            // { text: 'Getting Started', link: '/guide/getting-started' },
            // { text: 'Advanced', link: '/guide/advanced' }
          ]
        }
      ],

      // Sidebar for the "app dev II" section
      '/appdev-II-theory/': [
        {
          text: 'Reference',
          items: [
            // { text: 'Introduction', link: '/reference/' },
            { text: 'Javascript', link: '/appdev-II-theory/javascript' },
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],

      '/appdev-II-project/': [
        {
          text: 'Reference',
          items: [
            { text: 'FAQ\'s', link: '/appdev-II-project/faq' },
            { text: 'Project Statement', link: '/appdev-II-project/project-statement' },
            { text: 'Development Environment', link: '/appdev-II-project/development-environment-setup' },
            { text: 'Flask', link: '/appdev-II-project/code-examples' },
            { text: 'SQL Alchemy Models', link: '/appdev-II-project/sqlalchemy-models' },
            { text: 'Flask Security', link: '/appdev-II-project/flask-security' },
            // { text: 'CLI', link: '/reference/cli' },
            // { text: 'API', link: '/reference/api' }
          ]
        }
      ],

      // Default sidebar for the root level ("/")
      '/': [
        {
          text: 'Home',
          items: [
            { text: 'Introduction', link: '/' }
          ]
        }
      ]
    },

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
