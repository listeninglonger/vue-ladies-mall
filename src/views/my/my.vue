<template>
  <div class="my">
   <nav-bar class='my-navbar'>
     <div slot="center" >我的</div> 
   </nav-bar>
  <user-info></user-info>
  <section class="account">
    <div class="account-item">
      <div class="number">
        <span class="attract">0.00</span>
        元
      </div>
      <div class="des">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="attract">0</span>
        张
      </div>
      <div class="des">我的优惠券</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="attract">0.00</span>
        元
      </div>
      <div class="des">我的积分</div>
    </div>

  </section>
  <list-view></list-view>
 <!--  <scroll class="content">
  
  </scroll> -->
  </div>
</template>
<script>
import UserInfo from './childComps/userInfo'
import ListView from './childComps/listView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'my',
  components:{
    Scroll,
    NavBar,
    UserInfo,
    ListView
  }
}
</script>
<style scoped>
.my-navbar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
/* .content{
  height: 300px;
  background-color:blueviolet;
  overflow:hidden;
  color:white;
} */
.account{
  display: flex;
  height: 120px;
  background: #fff;
  justify-content: center;
  align-items: center;
  font-size: 20px;
 border-bottom: 10px solid #eee;
}
.account-item{
  margin: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.account-item .attract{
  color: var(--color-high-text);
  font-size: 28px;
  font-weight: 900;
}

</style>