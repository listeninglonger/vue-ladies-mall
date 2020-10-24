<template>
<div class="userinfo">
 <img src="@/assets/img/tabbar/my.png" alt="">
 <div class="username">
 <h2>登录注册</h2>
 <h2>></h2>
 
 </div>
</div>
</template>
<script>
export default {
name:'userInfo',
}
</script>
<style  scoped>
.userinfo{
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--color-tint);
  color: #fff;
}
.userinfo img{
  width:80px ;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  margin:0 15px;
}
.username{
  flex: 2;
  display: flex;
  text-align: center;
}
.username h2{
 flex:1
}
</style>