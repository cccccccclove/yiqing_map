import Taps from './taps.vue'
import Tap from './tap.vue'

export default((Vue:any) => {
      Vue.component(Taps.name,Taps)
      Vue.component(Tap.name,Tap)
})