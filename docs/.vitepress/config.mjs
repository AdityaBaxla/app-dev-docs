import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Application Development',
  description: 'Documentation for AppDev Projects and Theory',
  head : [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Appdev I', link: '/appdev-I-index' },
      { text: 'Appdev II', link: '/appdev-II-index' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: 
      // General sidebar content
     
      {
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
            { text: 'Javascript', 
              items: [
                { text : 'Introduction', link: '/appdev-II-theory/javascript' },
                { text: 'Variables', link: '/appdev-II-theory/variables' },
                { text: 'Datatype', link: '/appdev-II-theory/datatypes' },
                { text: 'Math Operators', link: '/appdev-II-theory/operators' },
                { text: 'Comparison Operators', link: '/appdev-II-theory/comparisonoperators.md' },
                { text: 'Logical Operators', link: '/appdev-II-theory/logicaloperators.md' },
                { text: 'Type Conversion', link: '/appdev-II-theory/typeconversion' },
                { text: 'Loops', link: '/appdev-II-theory/loops' },
                { text: 'Functions', link: '/appdev-II-theory/functions' },
                { text: 'Object', link: '/appdev-II-theory/objects' },
                { text: 'Arrays', link: '/appdev-II-theory/arrays' },
                { text: 'Non Values', link: '/appdev-II-theory/nonvalues' },
                { text: 'Scoping', link: '/appdev-II-theory/scoping' },
                { text: 'This', link: '/appdev-II-theory/this' },
                { text: 'Closure', link: '/appdev-II-theory/closures' },
                { text: 'Hoisting', link: '/appdev-II-theory/hoisting' },
                { text: 'DOM', link: '/appdev-II-theory/dom' },
              ]},
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
          text: 'Reference',
          items: [
            { text: 'AppDev I', link: '/appdev-I-index' },
            { text: 'AppDev II', link: '/appdev-II-index' },
           
          ]
        }
      ]}
    ,
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
