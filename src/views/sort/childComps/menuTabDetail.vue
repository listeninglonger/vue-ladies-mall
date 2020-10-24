<template>
<scroll class="allcontent" ref='allcontent' :probe='3'>
<div class="item">
<div v-for="(item,index) in sub.list" :key='index' class="list">
  <img :src="item.image" alt="">
  <span>{{item.title}}</span>
</div>
</div>
<sub-show :sub-content='subcontent'></sub-show>
</scroll>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
import SubShow from './subShow'
export default {
name:'MenuTabDetail',
components:{
  SubShow,
  Scroll
},
props:{
  sub:{
    type:Object
  },
  subcontent:{
    type:Object
  },
  
},
data() {
  return {
  
  }
},
mounted() {
  //console.log(this.$refs.allcontent);
 // console.log(this.subcontent);
  this.$refs.allcontent.refresh()
},

}
</script>
<style  scoped>
.allcontent{
  width: calc(100% - 100px);
  height: 574px;
  top:44px;
  bottom:49px;
}
.item{
  display: flex;
  flex-wrap: wrap;
  flex: 3;
}
.list{
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
}
.list img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border:1px solid #f6f6f6;
}

</style>