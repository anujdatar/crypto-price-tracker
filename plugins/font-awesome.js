import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faAd } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// Add items or icons to the library
// can add multiple icons (comma separated), or entire library (fas, fab, etc.)
library.add(faGithub)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

// if you need to use SVG icons that need to be translated
// dom.watch()
