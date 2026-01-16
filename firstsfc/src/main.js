import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
// The "look" - makes the layout work
import 'bootstrap/dist/css/bootstrap.min.css'

// The "brain" - makes the carousel and modals work
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.mount('#app')