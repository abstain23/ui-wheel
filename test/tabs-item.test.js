const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/components/tabs/tabs-item'
import Icon from '../src/components/icon.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('c-tabs-item', TabsItem)
Vue.component('c-icon',Icon)


describe('TabsItem', () => {
    it('存在', () => {
      expect(TabsItem).to.exist
    })

    it('接受 name 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData: {
          name: 'xxx',
        }
      }).$mount()
      expect(vm.$el.getAttribute('test-name')).to.eq('xxx')
    })

    it('接受 disabled 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData: {
          disabled: true,
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })

    it('接受 icon 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const x = vm.$el.querySelector('use')
      expect(x.getAttribute('xlink:href')).to.eq('#i-settings')
    })
})

