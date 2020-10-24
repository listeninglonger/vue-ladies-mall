<template>
<div class="check-button" :class="{checked:isChecked}">
  <img src="~assets/img/common/Tick.png" alt="">
</div>
</template>
<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
data() {
  return {
    
  }
},
}
</script>
<style  scoped>
.check-button{
  
  border-radius: 50%;
  border:2px solid #aaa;
}
.check-button img{
  width: 20px;
  height: 20px;
}
.checked{
  border-color:#f55;
  background-color: #f55;
}
</style>