<template>
  <div id="tabbar">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name:'TabBar'
};
</script>
<style scoped>
#tabbar {
  display: flex;
  background-color: rgb(233, 233, 233);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 3px rgba(100, 100, 100, 0.2);
  justify-content: space-around;
}

</style>