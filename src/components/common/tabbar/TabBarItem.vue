<template>
  <div>
    <div class="tabbar-item" @click='itemClick'>
      <div v-if="!isActive"><slot  name='item-icon'></slot> </div>
      <div v-else><slot  name='item-icona'></slot> </div>
      
      
      <div :style="activeStyle"><slot  name='item-text'></slot> </div>
      
    <!-- <img src="../../assets/img/home.png" alt="">
      <div>首页</div> -->
      
    </div>
    
  </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // isActive:false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !==-1
     // console.log(this.$route);
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      //this.isActive=true;
      this.$router.replace(this.link)
     // console.log(this.$router.replace)
    }
  }
}

</script>
<style  scoped>
.tabbar-item {
  flex: 1;
  font-size:14px;
  text-align: center;
  height: 49px;
  margin-bottom:2px
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align:0;
  
}
/* .active{
  color:red
} */
</style>