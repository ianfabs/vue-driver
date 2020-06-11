import Driver from 'driver.js'

let VueDriver = {}

VueDriver.steps = []

VueDriver.install = function (Vue, options) {
  // initialize Driver
  VueDriver.driver = new Driver({})
  // driver.highlight('selector');

  Vue.directive('driver-step', {
    bind (el, binding, vnode, oldVnode) {
      let step = {
        element: el,
        popover: {
          ...(binding.value ? (binding.value.popover || {}) : {})
        }
      }
      if (binding.value && binding.value.index != null) {
        console.log('We have an index!')
        VueDriver.steps.splice(binding.value.index, 0, step)
      } else {
        console.log('We have nothing :-(')
        VueDriver.steps.push(step)
      }
      if (binding.value && binding.value.onclick === true) {
        // This may cause a bug
        el.onclick = event => VueDriver.driver.highlight(step)
      }
      // console.dir(el)
      // console.log(binding.value)
      // console.log(vnode)
      // console.log(oldVnode)
    }
  })
  Vue.prototype.$driver = VueDriver.driver
  Vue.prototype.$startTour = (index) => {
    Vue.nextTick(() => {
      VueDriver.driver.defineSteps([...VueDriver.steps.filter(item => document.body.contains(item.element))])
      // console.log(VueDriver.steps)
      // console.log(VueDriver.driver.steps)
      VueDriver.driver.start(index)
    })
  }
}

export default VueDriver
