<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
}
</script>
<style scoped>
.navbar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>