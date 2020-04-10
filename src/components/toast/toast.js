import Toast from './toast.vue'

function createToast({ Vue, message, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData,
  })
  toast.$slots.default = message
  toast.$mount()
  // toast.$slots.default = message
  toast.$on('beforeClose', onClose && onClose)
  document.body.appendChild(toast.$el)
  return toast
}
let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        // console.log('c')
        currentToast.close()
      }
      currentToast = createToast({
        Vue, message, propsData: toastOptions, onClose: () => {
          currentToast = null
        }
      })
    }
  }
}