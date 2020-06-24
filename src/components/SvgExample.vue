<template>
  <div>
    <component :is="name" v-show="show">
    </component>
    <button @click.stop="trigger" class="btn trigger">trigger</button>
  </div>
</template>

<script>
import SvgSucess from '@/components/SVG/Sucess.vue'
import SvgFail from '@/components/SVG/Fail.vue'
import SvgLoad from '@/components/SVG/Load.vue'

export default {
  name: 'Example',
  props:{
    name:{
        type:String,
        default: ''
    }
  },
  components: {
    SvgSucess,
    SvgFail,
    SvgLoad
  },
  data:()=>{
    return{
        show:true
    }
  },
  methods:{
    trigger(){
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/demo.scss";
  .trigger{
  position: absolute;
  top:300px;
  left: 45%;
}

</style>
