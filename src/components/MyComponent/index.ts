//在此处挂载到全局，这样就不用每个组件中要使用都需要引入。相当于插件的形式
import Taps from './taps.vue'
export default(Vue:any) => {
      Vue.component(Taps.name, Taps)
}