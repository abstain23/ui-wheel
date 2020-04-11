const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/tabs/tabs.vue'
import TabsHead from '../src/components/tabs/tabs-head'
import TabsBody from '../src/components/tabs/tabs-body'
import TabsItem from '../src/components/tabs/tabs-item'
import TabsPane from '../src/components/tabs/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('c-tabs', Tabs)
Vue.component('c-tabs-head', TabsHead)
Vue.component('c-tabs-body', TabsBody)
Vue.component('c-tabs-item', TabsItem)
Vue.component('c-tabs-pane', TabsPane)

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接受selected属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <c-tabs selected="finance">
        <c-tabs-head>
          <c-tabs-item name="woman"> 美女 </c-tabs-item>
          <c-tabs-item name="finance"> 财经 </c-tabs-item>
          <c-tabs-item name="sports"> 体育 </c-tabs-item>
        </c-tabs-head>
        <c-tabs-body>
          <c-tabs-pane name="woman"> 美女相关资讯 </c-tabs-pane>
          <c-tabs-pane name="finance"> 财经相关资讯 </c-tabs-pane>
          <c-tabs-pane name="sports"> 体育相关资讯 </c-tabs-pane>
        </c-tabs-body>
      </c-tabs>
    `
    const vm = new Vue({
      el: div
    })
   vm.$nextTick(() => {
    const selectedItem = vm.$el.querySelector(`.tabs-item[test-name=finance ]`)
    expect(selectedItem.classList.contains('active')).to.be.true
    done()
   })
  })
})