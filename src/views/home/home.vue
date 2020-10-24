<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">美丽女装</div></nav-bar>
    <!-- <h2>首页</h2> -->
     <tab-control :titles='["流行","新款","精选"]' 
   ref='tabControl1'
    @tabClick='tabClick'
    class="tab-control"
    v-show="isTabFixed"
     ></tab-control>
    <scroll class="content" ref="scroll" 
    :probe-type='3' 
    :pull-up-load='true'
    @scroll-position="contentScroll"
    @pullingUp='loadMore'>
      <home-swiper :banners='banners'
      @swiperimgload='swiperimgload'
      ></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  
    <tab-control :titles='["流行","新款","精选"]' 
   ref='tabControl2'
    @tabClick='tabClick'
     ></tab-control>
      
   <goods-list :goods='showGoods'></goods-list>
    
   </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'

import {itemListenerMixin} from '@/common/mixin'
import {getHomeMultiData,getHomeGoods} from 'networks/home.js'
// import {Swiper,SwiperItem} from '@/components/common/swiper/index.js'
import Scroll from 'components/common/scroll/Scroll'
import {debounce} from 'components/common/utils'

export default {
  name:'home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
     NavBar,
     TabControl,
     GoodsList,
     Scroll,
     BackTop
    

  },
  
  data() {
    return {
     banners:[],
     recommends:[],
     goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
     },
     currentType:'pop',
     isShowBackTop:false,
     tabOffsetTop:0,
     isTabFixed:false,
     itemImgListener:null

    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.请求多个数据
  this.getHomeMultiData()
 //2.请求商品数据
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')
  
 },
 activated() {
  
 },
 deactivated() {
   this.$bus.$off('itemImgLoad',this.itemImgListener)
 },
mounted() {
 
  //1.监听item图片加载完成
  const refresh = debounce(this.$refs.scroll.refresh,400)
 this.itemImgListener = ()=>{
    //console.log('----------');
    //this.$refs.scroll.refresh();
  refresh();
  }
  this.$bus.$on('itemImgLoad',this.itemImgListener)

  
},
destroyed() {
  console.log('destroyed');
},
methods: {
    /* 事件监听相关方法 */
   /*  debounce(func,delay){
      let timer = null


      return function(...args){
       if(timer){clearTimeout(timer)}
       timer = setTimeout(()=>{
         func.apply(this,args)
       },delay)
      }
    }, */
    

     tabClick(index){
       //console.log(index);
       switch(index){
         case 0:
           this.currentType = 'pop';
           break;
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
       }
       this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
       //console.log(this.$refs.tabControl1.currentIndex);
    },
    backClick(){
     // console.log('back');
    this.$refs.scroll.scrollTo(0,0,500)
    },
   contentScroll(position){
     //console.log(position);
     //1.判断BackTop是否显示
   this.isShowBackTop = -position.y>1000
   //2.决定tabControl是否吸顶（position:fiexd）
  this.isTabFixed = (-position.y)>this.tabOffsetTop

   },
    loadMore(){
     // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
      //this.$refs.scroll.scroll.refresh()
        //重新计算yi下可滚动高度
    },
     swiperimgload(){
        //2.获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.$refs.tabControl.$el.offsetTop);
     },



    /* 网络请求相关方法 */
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
      //this.result = res;
           this.banners=res.data.banner.list
           this.recommends = res.data.recommend.list
       })
     },
    
    getHomeGoods(type){
      let page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
       // console.log(res);//此时的res仍然是局部变量
        this.goods[type].list.push(...res.data.list)
        //console.log(res.data.list);
        //console.log(this.goods[type].list);
        this.goods[type].page +=1
        //完成上拉加载更多
         this.$refs.scroll.finishPullUp()
        
      })
    },
   
    
   
  },
}
</script>
<style scoped>
.home-nav{
   background-color: var(--color-tint);
    color: white;
    /* font-size: 24px; */
    /* font-weight: bold; */
    /* 在使用浏览器原生滚动时使用 */
   /*  position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 999; */
}
#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
  /* .tab-control{*/
  /* position: sticky; */
  /* top: 44px; */
  /* background-color:#fff ; */
  /* z-index: 999px;} */

.content{
  /* padding-top: 44px; */

  /* height:calc(100%-93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  /* height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px; */
}
.tab-control{
  position: relative;
  z-index: 9;
  background-color: white;
}

</style>