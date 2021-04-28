<template>
  <div>
    <Banner />
    <Category />
    <Details />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Banner from "./banner.vue"
import Category from "./category.vue"
import Details from "./details.vue"
export default {
components:{
  Banner,
  Category,
  Details
},

   setup(){
      
      const state = reactive(
        {
        }
      )

    
      return {...toRefs(state)}
   }
}
</script>

<style lang="less">
</style>


