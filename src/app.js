import Vue from 'vue'
import CButton from './components/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/button-group.vue'

Vue.component('c-button',CButton)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})