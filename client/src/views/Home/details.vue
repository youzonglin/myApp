<template>
  <div class="details">
    <h3 class="title">猜你喜欢</h3>
    <ul>
      <li>
        <img src="@/assets/image/5.jpg" alt />
        <div>云南</div>
      </li>
      <li>
        <img src="@/assets/image/6.jpg" alt />
        <div>土耳其</div>
      </li>
      <li>
        <img src="@/assets/image/7.jpg" alt />
        <div>洛杉矶</div>
      </li>
    </ul>
  </div>
</template>
<script>
import {toRefs, reactive} from "vue"
export default {
   setup(){
      const data = reactive({

      })
   return {...toRefs(data)}
   }
}
</script>
<style lang="less">
.details {
  .title {
    margin-left: 10%;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      img {
        overflow: hidden;
        width: 100px;
        height: 150px;
      }
    }
  }
}
</style>