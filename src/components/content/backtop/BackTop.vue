<template>
<div class="back-top" >
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>
<script>
export default {
name:'BackTop',
methods:{}
/* back(){
  console.log('back to the top');
}
} */
}
</script>
<style  scoped>
.back-top{
  position: fixed;
  z-index: 999;
  bottom: 55px;
  right:8px;
}
.back-top img{
  width: 43px;
  height: 43px;
}
</style>