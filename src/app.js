import Vue from 'vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/button-group.vue'
import Input from './components/input/input.vue'
import Col from './components/row_col/col.vue'
import Row from './components/row_col/row.vue'
import Header from './components/layout/header.vue'
import Layout from './components/layout/layout.vue'
import Sider from './components/layout/sider.vue'
import Content from './components/layout/content.vue'
import Footer from './components/layout/footer.vue'
import Toast from './components/toast/toast.js'
import Tabs from './components/tabs/tabs.vue'
import TabsHead from './components/tabs/tabs-head.vue'
import TabsItem from './components/tabs/tabs-item.vue'
import TabsBody from './components/tabs/tabs-body.vue'
import TabsPane from './components/tabs/tabs-pane.vue'


Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-input', Input)
Vue.component('c-col', Col)
Vue.component('c-row', Row)
Vue.component('c-header', Header)
Vue.component('c-layout', Layout)
Vue.component('c-sider', Sider)
Vue.component('c-content', Content)
Vue.component('c-footer', Footer)
Vue.component('c-tabs', Tabs)
Vue.component('c-tabs-head', TabsHead)
Vue.component('c-tabs-item', TabsItem)
Vue.component('c-tabs-body', TabsBody)
Vue.component('c-tabs-pane', TabsPane)
Vue.use(Toast)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    value: '',
    tabSelected: 'sports'
  },
  created() {
  },
  methods: {
    yy(data) {
      console.log('ccc', data)
    },
    inputChange(e) {
      // console.log(e)
      this.value = e
    },
    onBlur(e) {
      console.log(e)
    },
    testToast1() {
      this.testToast('top')
    },
    testToast2() {
      this.testToast('center')
    },
    testToast3() {
      this.testToast('bottom')
    },
    testToast(position) {
      this.$toast('这是一条信息', {
        closeButton: {
          text: 'ok',
          callback(toast) {
            toast.test()
            console.log('cc')
          }
        },
        enableHtml: true,
        autoClose: false,
        position
      })
    }
  }
})

/*
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
  console.log(href)
  expect(href).to.eq('#i-settings')
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
  console.log(href)
  expect(href).to.eq('#i-loading')
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
*/