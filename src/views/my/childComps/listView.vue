<template>
<div class="list">
  <div v-for="(item,index) in myList" :key='index' class="item">
   <img :src="item.iconpath" alt="">
    <span>{{item.title}}</span>
  
  </div>
</div>
</template>
<script>
export default {
name:'listView',
data() {
  return {
    myList:[
      {title:'我的消息',iconpath:require('@/assets/img/my/news.png')},
      {title:'积分商城',iconpath:require('@/assets/img/my/shop.png')},
      {title:'会员卡',iconpath:require('@/assets/img/my/vip.png')},
      {title:'历史订单',iconpath:require('@/assets/img/my/pay.png')},
      
    ]
  }
},
}
</script>
<style  scoped>
.list{
  border-bottom: 10px solid #eee;
}
.item{
  height: 45px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;

}
.item img{
  width: 28px;
  height: 28px;
  margin: 10px;
}
.item span{
  font-size: 20px;
}
</style>