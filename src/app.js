import Vue from 'vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/button-group.vue'

Vue.component('c-button',Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
let expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount('#test')
  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#isettings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#iloading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
 vm.$mount()
 let spy = chai.spy(function(){})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}