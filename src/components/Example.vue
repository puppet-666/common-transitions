<template>
  <div>
    <component :is="name" v-show="show">
      <box></box>
    </component>
    <button @click.stop="triggerTransition" class="btn trigger">trigger</button>
  </div>
</template>

<script>
import Fade from '@/components/Fade/FadeTransition.vue'
import ZoomCenter from '@/components/Zoom/ZoomCenterTransition.vue'
import ZoomUp from '@/components/Zoom/ZoomUpTransition.vue'
import ZoomX from '@/components/Zoom/ZoomXTransition.vue'
import ZoomY from '@/components/Zoom/ZoomYTransition.vue'
import Collapse from '@/components/Collapse/CollapseTransition.vue'
import Box from '@/components/Box/Index.vue'
import SvgSucess from '@/components/SVG/Sucess.vue'
import SvgFail from '@/components/SVG/Fail.vue'

export default {
  name: 'Example',
  props:{
    name:{
        type:String,
        default: ''
    }
  },
  components: {
    Fade,
    Box,
    ZoomCenter,
    ZoomUp,
    ZoomX,
    ZoomY,
    Collapse,
    SvgSucess,
    SvgFail
  },
  data:()=>{
    return{
        show:true
    }
  },
  methods:{
    triggerTransition(){
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/demo.scss";
.trigger{
  position: absolute;
  top:300px
}
.group{
  position: absolute;
  top: 300px;
  left: 200px;
}
</style>
