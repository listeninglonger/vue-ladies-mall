<template>
<div id="detail" >
<!-- 导航栏 -->
<detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="navbar" />
<scroll class="content" ref="dscroll" @scroll-position='contentScoll' :probe-type='3'>
<detail-swiper :top-images="topImages"/>
<detail-base-info :goods="goods" />
<detail-shop-info :shop='shop' />
<detail-goods-info :detailInfo='detailInfo' @imgLoad='imgLoad' />
<detail-param-info ref="params" :paramInfo='paramsInfo' />
<detail-comment-info ref="comments" :commentInfo='commentInfo' />
<goods-list ref='recommends' :goods='recommends' />
</scroll>
 <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
<detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>

</div>
</template>
<script>
import DetailNavBar from './childComps/detailNabBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'


import {itemListenerMixin,backTopMixin} from '@/common/mixin'
//网络请求相关
import {getDetail,Goods,shop,GoodsParam,getRecommend} from 'networks/detail'
import {debounce} from 'components/common/utils'
import {mapActions} from 'vuex'

export default {
name:'Detail',
components:{
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  DetailBottomBar,
  Scroll,
  GoodsList,
  BackTop,
  
},
mixins:[itemListenerMixin,backTopMixin],
data(){
  return{
    iid:null,
    topImages:[],
    title:null,
    goods:{},
    shop:{},
    detailInfo:{},
    paramsInfo:{},
    commentInfo:{},
    recommends:[],
    itemImgListener:null,
    titleTopY:[],
    getTitleY:null,
    currentIndex:0,
    
 

  }
},
created(){
  //console.log(this.$route.params);
  //1.保存iid
  this.iid = this.$route.params.iid
  //2.根据iid请求详情数据
  getDetail(this.iid).then(res=>{
   // console.log(res);
    //1.获取顶部的图片轮播数据
    const data = res.result
    this.topImages = data.itemInfo.topImages
    //获取商品信息Goods
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //获取店铺信息shop
    this.shop = new shop(data.shopInfo)
    //保存商品详情信息
    this.detailInfo = data.detailInfo;
    //获取参数信息
    this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    //获取评论信息
    if(data.rate.cRate!==0){
      this.commentInfo = data.rate.list[0]
    }
  this.$nextTick(()=>{
    //这里虽然dom被渲染出来了，但是图片仍然没有加载完成
    /*  this.titleTopY=[]
  this.titleTopY.push(0)
 this.titleTopY.push(this.$refs.params.$el.offsetTop)
 this.titleTopY.push(this.$refs.comments.$el.offsetTop)
 this.titleTopY.push(this.$refs.recommends.$el.offsetTop)
console.log(this.titleTopY); */
  })

  })
  getRecommend().then(res=>{
   //console.log(res);
    this.recommends = res.data.list
  })
  //给getTitleY赋值
  this.getTitleY = debounce(()=>{
     this.titleTopY=[]
    this.titleTopY.push(0)
    this.titleTopY.push(this.$refs.params.$el.offsetTop)
    this.titleTopY.push(this.$refs.comments.$el.offsetTop)
    this.titleTopY.push(this.$refs.recommends.$el.offsetTop)
    this.titleTopY.push(Infinity)
  // console.log(this.titleTopY);
  },100)
},
mounted() {
 debounce(this.$refs.dscroll.refresh,500)()
},
updated() {
},
destroyed() {
  this.$bus.$off('detailItemImgLoad',this.itemImgListener)
},
methods: {
  ...mapActions(['addCart']),
  imgLoad(){
    //console.log("--------");
    this.$refs.dscroll.refresh();
   this.getTitleY()
  },
  titleClick(index){
    //console.log(index);
    this.$refs.dscroll.scrollTo(0,-this.titleTopY[index],300)
  },
 contentScoll(position){
    // console.log(position);
    //获取y值
   const positionY = -position.y
   //将拿到的position和主题中的值对比
   let length = this.titleTopY.length
   for(let i=0;i<length-1;i++){
     if(this.currentIndex!==i &&(positionY>=this.titleTopY[i]&&positionY<this.titleTopY[i+1])){
       this.currentIndex =i
       this.$refs.navbar.currentIndex = this.currentIndex
     }
   }
   //是否显示回到顶部
   this.isShowBackTop = -position.y>1000
  },
  addToCart(){
    // console.log("---");
    //获取购物车需要展示的信息
    const product ={}
    product.image =this.topImages[0]
    product.title = this.goods.title
    product.desc = this.goods.desc
    product.price = this.goods.realPrice
    product.iid = this.iid
   product.count = 0
    //console.log(product);
    //2.将商品添加到购物车
    //this.$store.state.cartList.push(product)
   // this.$store.commit('addCart',product)
   /*  this.$store.dispatch('addCart',product).then(res=>{
      console.log(res);
    }) */
    this.addCart(product).then(res=>{
     // console.log(res);
     /* this.show =true
    this.message = res
    setTimeout(()=>{
      this.show = false
      this.message = ''
    },2000)*/
    console.log(this.$toast);
  this.$toast.show(res,2000)

    }) 
    //添加到购物车成功
  },

  
  
},
}
</script>
<style  scoped>
#detail{
  position: relative;
  z-index: 9999;
 background-color: #fff;
 height: 100vh ;
}
.content{
  height: calc(100% - 44px - 49px);
  background-color:#fff ;
}
.detail-nav{
  position: relative;
  z-index: 9999;
  background-color: #fff;
}
</style>