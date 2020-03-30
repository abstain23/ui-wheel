import Vue from 'vue'
import CButton from './components/button.vue'
import Icon from './components/icon.vue'

Vue.component('c-button',CButton)
Vue.component('c-icon', Icon)

new Vue({
  el: '#app',
  data: {
  }
})