<template>
  <div>
    <swiper>
      <swiper-item v-for='(item,index) in banners' :key="index">
        <a :href="item.link"><img :src="item.image" alt="" @load='swiperimgload'></a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad :false,
      refresh:1
     
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    swiperimgload(){
      //console.log("----");
      if(!this.isLoad){
      this.$emit('swiperimgload')
      this.isLoad = true
      setTimeout(()=>{
        this.refresh++
      })
      }
     
    }
  },
  watch: {
    isLoad(){
      
    }
  },

 
}
</script>
<style scoped>

</style>