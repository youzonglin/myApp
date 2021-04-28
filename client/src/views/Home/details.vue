<template>
  <div class="details">
    <h3 class="title">猜你喜欢</h3>
    <ul>
      <li>
        <img src="@/assets/image/5.jpg" alt />
      </li>
      <li>
        <img src="@/assets/image/6.jpg" alt />
      </li>
      <li>
        <img src="@/assets/image/7.jpg" alt />
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
      width: 100px;
      height: 150px;
      overflow: hidden;
    }
  }
}
</style>