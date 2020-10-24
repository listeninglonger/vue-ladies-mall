export const itemListenerMixin = {
  mounted() {
    //const refresh = debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = ()=>{
      debounce(this.$refs.dscroll.refresh,500)()
      }
      this.$bus.$on('detailItemImgLoad',this.itemImgListener)
    //console.log("我是混入中的内容"); 
    },
  
}
export const backTopMixin={
  data(){
    return {isShowBackTop:false}
  },
  methods:{
    backClick(){
      this.$refs.dscroll.scrollTo(0,0,500)
      },
  }
}