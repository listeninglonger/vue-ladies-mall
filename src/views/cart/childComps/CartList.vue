<template>
<div class="cart-list">
  <scroll class="content" ref="scroll">
 <cart-list-item v-for='(item,index) in list' :key="index" :product='item'  />
</scroll>
</div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'

import cartListItem from './CartListItem'

import {mapGetters} from 'vuex'
export default {
name:'',
components:{
  Scroll,
  cartListItem
},
computed: {
  ...mapGetters({
    list:'cartList'
  })
},
activated() {
  //console.log("-----");
  this.$refs.scroll.refresh();
},
}
</script>
<style  scoped>
.cart-list{
  height:100vh;
}
.content{
  height:calc(100% - 44px - 49px);
   overflow:hidden;
}
/* .cart-list{
  height:calc(100% - 44px - 49px);
}
.content{
  height:100%;
   overflow:hidden;
} */
</style>