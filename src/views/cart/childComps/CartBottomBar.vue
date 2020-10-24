<template>
<div class="bottom-bar">
  <div class="check">
    <check-button class="check-button" 
    :is-checked='isSelectAll'
    @click.native ='checkClick'></check-button>
    <span class="all">全选</span>
  </div>
  <div class="sum">
    合计：{{totalPrice}}
  </div>
  <div class="calculate">
    去计算({{checkedLength}})
  </div>
</div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import {mapGetters} from 'vuex'
export default {
components:{
  CheckButton
},
methods: {
  checkClick(){
    //console.log('------');
    if(this.isSelectAll){
      this.cartList.forEach(item=>item.checked =false)
    }else{
      this.cartList.forEach(item=>item.checked = true)
    }
  },
calcClick(){
  if(!this.isSelectAll){
    this.$toast.methods.show('请选择购买的商品',2000)
  }
},
},
computed: {
  ...mapGetters(['cartList']),
  totalPrice(){
    return '￥'+ this.cartList.filter(item=>{
      return item.checked
    }).reduce((preValue,item)=>{
      return preValue + item.price * item.count
    },0).toFixed(2)
  },
  checkedLength(){
    return this.cartList.filter(item=>item.checked).length
  },
  isSelectAll(){
    //逻辑1
   if(this.cartList.length===0) return false
  //使用fliter
   //return !(this.cartList.filter(item=>!item.checked).length)
    //使用find
    //return !this.cartList.find(item=>!item.checked)
    //普通遍历
    for(let item of this.cartList){
     if(!item.checked){
       let isChecked = false
      return false
     }
    }
    return true
  },

},

}
</script>
<style  scoped>
.bottom-bar{
  height: 40px;
  background-color:#eee;
  position: relative;
 bottom: 129px;
display: flex;
align-items: center;
  
}
.check{
  display: flex;
  height: 100%;
  margin-left: 4px;
  align-items: center;
  width: 58px;
}
.check-button{
  width: 22px;
  height: 22px;
}
.check .all{
  margin-left: 4px;
}
.sum{
  margin-left: 40px;
flex: 1;
}
.calculate{
 width: 90px;
 line-height: 40px;
 text-align: center;
 background: #f55;

 color: white;

}
</style>