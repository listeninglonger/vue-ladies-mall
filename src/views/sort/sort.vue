<template>
  <div>
    <!-- <h2>分类</h2> -->
   <nav-bar class="navbar">
     <div slot="center">分类</div>
   </nav-bar>
   <!-- 整体 -->
   
<div>
<!-- menu -->

<div class="menu">
<sort-menu :menulist='sortMenu' @menuchoose='selectItem'></sort-menu>
<!-- scroll -->
  <!--  <scroll class="content" ref="sortscroll" 
:probe-type='3' 
:pull-up-load='true'> -->

 <menu-tab-detail :sub='showmd'></menu-tab-detail>


<!-- </scroll> -->
  </div>
  
  

</div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import SortMenu from './childComps/sortMenu'
import MenuTabDetail from './childComps/menuTabDetail'

import {getSortData,getMenuDetail,getCategoryDetail} from '@/networks/sort.js'

export default {
 name:'sort',
 components:{
   NavBar,
   Scroll,
   SortMenu,
   MenuTabDetail,
   
 },
 data() {
   return {
    sortMenu:[],
    menuData:{},
    menushow:{},
    currentIndex:-1

   }
 },
 created() {
  this.getMenu()
 },
 mounted() {
  // console.log(this.$refs.sortscroll);
   //this.$refs.sortscroll.refresh();
 
  //  console.log(JSON.stringify(this.menuData));
   console.log(this.menuData);
 },
 computed: {
   showmd(){
     //console.log(this.currentIndex);
     if(this.currentIndex===-1)return {}
     return this.menushow;
      console.log(this.menushow);
   }
 },
 methods: {
  getMenu(){
    getSortData().then(res=>{
      this.sortMenu = res.data.category.list
      //console.log(this.sortMenu);
      for(let i=0;i<this.sortMenu.length;i++){
        this.menuData[i] = {
             'new':[],
            'pop':[],
            'sell':[]
        
        }
       
      }
       
      this.getSubCategories(0)
    })
   },
   getSubCategories(index){
     this.currentIndex = index
     //console.log(this.currentIndex);
    const maitKey = this.sortMenu[index].maitKey
     //console.log(maitKey);
    getMenuDetail(maitKey).then(res=>{
      //console.log(res);
      this.menushow = res.data
       //console.log(this.menuData[index].menushow);
      //  this.menuData = {...this.menuData}
     // this.$refs.sortscroll.refresh()
      this.getDetail('pop')
      this.getDetail('new')
      this.getDetail('sell')
    
    })
   },
   getDetail(type){
     let wallkey = this.sortMenu[this.currentIndex].miniWallkey
     //console.log(wallkey);
     getCategoryDetail(wallkey,type).then(res=>{
      // console.log(res);
       this.menuData[this.currentIndex][type]= res
        // this.menuData = {...this.menuData}
        //console.log(this.menuData);
     })
   },

   selectItem(index){
     this.getSubCategories(index)
   }
 },

}
</script>
<style scoped>
 /* .content{
    height: 150px;
    background-color:#ccc ;
    overflow-y:scroll
  } */
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    z-index: 999;
  }
  .menu{
    display: flex;
  
  }
  .content{
    /* height: calc(100% -44px -49px); */
   
    height: 576px;
    top: 44px;
    bottom: 49px;
    background: #fff;
    width: calc(100% - 100px);
  }
  
</style>