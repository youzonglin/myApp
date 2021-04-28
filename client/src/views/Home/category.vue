<template>
  <div class="category">
    <ul>
      <li>
        <div class="icono-home"></div>
        <div>外卖</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>美食</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>酒店</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>休闲</div>
      </li>
    </ul>
    <ul>
      <li>
        <div class="icono-home"></div>
        <div>电影</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>打车</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>买菜</div>
      </li>
      <li>
        <div class="icono-home"></div>
        <div>福利</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed } from 'vue'

export default {

   setup(props){
      const state = reactive(
        {a:111,
        //  n: computed(()=>{
        //    return state.a++
        //  })
        }
      )

      const change = ()=>{
        state.a++
      }

      return {...toRefs(state), change}
   }
}
</script>

<style lang="less">
.category {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
