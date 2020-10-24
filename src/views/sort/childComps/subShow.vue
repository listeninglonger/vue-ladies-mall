<template>
<div>
 <tab-control :titles="tab" @tabClick='tabClick'></tab-control>
 <goods-list></goods-list>
</div>
</template>
<script>
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
export default {
name:'subShow',
props:{
  subContent:{
    type:Object
  },
  currentindex:{
    type:Number,
    default(){
      return 0
    }
  }
},
components:{
  TabControl,
  GoodsList
},
data(){
 return {
   tab:['新品','流行','热卖'],
 currentTab:'new',
 show:[]
 }
},
computed: {
},
mounted() {
  //console.log(this.subContent[this.currentindex]);
 console.log(this.subContent);
},
methods: {
  tabClick(index){
     switch(index){
         case 0:
           this.currentTab = 'new'
           break;
          case 1:
            this.currentTab = 'pop'
            break
          case 2:
            this.currentTab = 'sell'
            break
       }
       this.show = this.subContent[this.currentTab]
  //console.log(this.subContent[this.currentTab]);
  }
},
}
</script>
<style  scoped>
</style>