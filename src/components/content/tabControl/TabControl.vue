<template>
  <div class="tab-control">
    <div v-for="(items,index) in titles" :key="index" 
    class="tab-control-item"
    :class="{active:index==currentIndex}"
    @click="tabClick(index)"
    >
      <span>{{items}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
     this.$emit('tabClick',index)
    }
  },
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding:5px;
}
.active{
  color:var(--color-high-text);
 
}
.active span{
   border-bottom: 2px solid var(--color-high-text);
}
</style>