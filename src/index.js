import component from './VueDatepickerLocal.vue'
function install (Vue) {
  Vue.component(component.name, component)
}
component.install = install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default component
