// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import './style.css'
import DefaultTheme from 'vitepress/theme'
import OSSwitcher from '../components/OSSwitcher.vue'




/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'sidebar-top' : () => h(OSSwitcher, {
        onOsChange: (os) => {
          console.log(`Selected OS: ${os}`)
        }
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
