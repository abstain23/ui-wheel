const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
  it('存在', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '1222'
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.value).to.eq('1222')
    })

    it('接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.disabled).to.eq(true)
    })

    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.readOnly).to.eq(true)
    })

    it('测试error', () => {
      vm = new Constructor({
        propsData: {
          error: '错错错'
        }
      }).$mount()
      const spanEle = vm.$el.querySelector('span')
      const useEle = vm.$el.querySelector('use')
      expect(useEle.getAttribute('xlink:href')).to.eq('#i-err')
      expect(spanEle.innerText).to.eq('错错错')
    })
  })

  describe('测试事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        // event.target = {value: '1234'}
        Object.defineProperty(event, 'target', {
          enumerable: true,
          value:{value: '1234'}
        })
        let inputEle = vm.$el.querySelector('input')
        inputEle.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('1234')
      })
    })
  })
})