import { defineConfig } from 'vitepress'


const JS_PREFIX = "/appdev-II-theory/javascript"
const VUE_PREFIX = "/appdev-II-theory/vue"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Application Development',
  description: 'Documentation for AppDev Projects and Theory',
  head : [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './assets/favicon.svg' }]
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
            { text: 'Week 1 - 4'},
            { text: 'Javascript', 
              collapsed: false,
              items: [
                { text: 'Introduction', link: `${JS_PREFIX}/javascript` },
                { text: 'Variables', link: `${JS_PREFIX}/variables` },
                { text: 'Datatype', link: `${JS_PREFIX}/datatypes` },
                { text: 'Math Operators', link: `${JS_PREFIX}/operators` },
                { text: 'Comparison Operators', link: `${JS_PREFIX}/comparisonoperators.md` },
                { text: 'Logical Operators', link: `${JS_PREFIX}/logicaloperators.md` },
                { text: 'Type Conversion', link: `${JS_PREFIX}/typeconversion` },
                { text: 'String', link: `${JS_PREFIX}/strings` },
                { text: 'Loops', link: `${JS_PREFIX}/loops` },
                { text: 'Object', link: `${JS_PREFIX}/objects` },
                { text: 'Arrays', link: `${JS_PREFIX}/arrays` },
                { text: 'Functions', link: `${JS_PREFIX}/functions` },
                { text: 'Non Values', link: `${JS_PREFIX}/nonvalues` },
                { text: 'Scoping', link: `${JS_PREFIX}/scoping` },
                { text: 'This', link: `${JS_PREFIX}/this` },
                { text: 'Call Bind Apply', link: `${JS_PREFIX}/callbindapply` },
                { text: 'Closure', link: `${JS_PREFIX}/closures` },
                { text: 'Hoisting', link: `${JS_PREFIX}/hoisting` },
                { text: 'DOM', link: `${JS_PREFIX}/dom` },
              ]},
              { text : 'Vue JS',
                collapsed: false,
                items : [
                {text : 'Introduction', link: `${VUE_PREFIX}/vue`}
              ]},
              { text: 'Week 5 - 8'},
              { text : 'Advanced Javascript',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/vue'},
              ]},
              { text : 'Vue Router',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/placeholder'},
              ]},
              { text : 'Vuex',
                collapsed: false,
                items : [
                {text : 'Promises', link: '/appdev-II-theory/placeholder'},
                {text : 'Async Await', link: '/appdev-II-theory/placeholder'},
                {text : 'Browser Storage', link: '/appdev-II-theory/placeholder'},
              ]},
              { text: 'Week 9 - 12'},
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
