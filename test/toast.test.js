const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast/toast.vue'


describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('属性', () => {
    // this.timeout(15000)
    it('自动关闭 autoClose autoCloseDelay', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1000
        }
      }).$mount(div)
      vm.$on('beforeClose', () => {
        // console.log('close')
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
      // setTimeout(() => {
      //   expect(document.body.contains(vm.$el)).to.eq(false)
      //   done()
      // }, 1500)
    })

    it('测试closeButton', (done) => {
      const Constructor = Vue.extend(Toast)
      const callback = sinon.fake() //测试事件
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '测试关闭',
            callback
          }
        }
      }).$mount()
      // console.log(vm.$el.outerHTML)
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.innerHTML).to.eq('测试关闭')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 1600)
    })


    it('enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = '<h1 id="cc">hhhh</h1>'
      vm.$mount()
      const h1 = vm.$el.querySelector('#cc')
      expect(h1).to.exist
    })

    it('position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-top')).to.eq(true)
    })
  })
})