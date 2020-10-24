<template>
<scroll id="menu">
  <div class="menu-list">
    <div class="menu-listitem"
    v-for='(item,index) in menulist'
    :key='index'
    :class='{active:index===currentIndex}'
    @click='menuClick(index)'
    >
    {{item.title}}

    </div>
  </div>
</scroll>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
name:'sortMenu',
components:{
  Scroll
},

props:{
  menulist:{
    type:Array,
    default(){
      return []
    }
  }
},
data() {
  return {
    currentIndex:0
  }
},
methods: {
  menuClick(index){
    this.currentIndex = index
    this.$emit('menuchoose',index)
  }
},
}
</script>
<style  scoped>
#menu{
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.menu-listitem{
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  text-align: center;
}
.active{
  background: #fff;
  font-weight: 700;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>