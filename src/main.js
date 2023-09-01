import '@/assets/css/style.css'
import '@/assets/css/responsive.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMagnifyingGlass, faXmark, faAngleRight,  faArrowUp, faPlay, faInfo, faCircle, faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add( faMagnifyingGlass, faXmark, faFacebookF, faLinkedinIn, faTwitter, faAngleRight, faArrowUp, faPlay, faInfo, faCircle, fasStar, farStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')