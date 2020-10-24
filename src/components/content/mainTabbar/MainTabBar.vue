<template>
  <div>
    <tab-bar>
  <tab-bar-item link='/home' activeColor='red'>
    <img slot="item-icon" src='@/assets/img/tabbar/home.png' alt="">
    <img slot="item-icona" src="@/assets/img/tabbar/ahome.png" alt="">
    <div slot="item-text">首页</div>
  </tab-bar-item>
  <tab-bar-item link='/sort' activeColor='red'>
      <img slot="item-icon" src="@/assets/img/tabbar/icon32.png" alt="">
      <img slot="item-icona" src="@/assets/img/tabbar/aicon32.png" alt="">
    <div slot="item-text">分类</div>
  </tab-bar-item >
  <tab-bar-item link='/cart' activeColor='red'>
      <img slot="item-icon" src="@/assets/img/tabbar/cart.png" alt="">
      <img slot="item-icona" src="@/assets/img/tabbar/acart.png" alt="">
    <div slot="item-text">购物车</div>
  </tab-bar-item>
  <tab-bar-item link='/my' activeColor='red'>
      <img slot="item-icon" src="@/assets/img/tabbar/my.png" alt="">
      <img slot="item-icona" src="@/assets/img/tabbar/amy.png" alt="">
    <div slot="item-text">我的</div>
  </tab-bar-item>
</tab-bar>
  </div>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>