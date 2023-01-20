import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowDown, faCaretDown, faCaretUp, faStar} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faArrowDown, faCaretDown, faCaretUp)

createApp(App).mount('#app')
