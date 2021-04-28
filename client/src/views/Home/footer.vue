<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home" active-class="selected">
          <div class="icono-home"></div>
          <div>首页</div>
        </router-link>
      </li>
      <li>
        <router-link to="/discover" active-class="selected">
          <div class="icono-eye"></div>
          <div>发现</div>
        </router-link>
      </li>
      <li>
        <router-link to="/order" active-class="selected">
          <div class="icono-document"></div>
          <div>订单</div>
        </router-link>
      </li>
      <li>
        <router-link to="/mine" active-class="selected">
          <div class="icono-user"></div>
          <div>我的</div>
        </router-link>
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
.footer {
  ul {
    display: flex;
    padding: 20px 0;
    justify-content: space-evenly;

    .selected {
      color: orange;
    }
  }
}
</style>
