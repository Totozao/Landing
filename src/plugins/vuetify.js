/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'
import { aliases, md } from 'vuetify/iconsets/md'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'md',
    sets: {
      md
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
        },
      },
    },
  },
})
