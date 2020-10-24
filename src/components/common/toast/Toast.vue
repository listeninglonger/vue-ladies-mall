<template>
<div class="toast" v-show="isShow">
 <div>{{msg}}</div> 
</div>
</template>
<script>
export default {
  name:'toast',
props:{
 /*  message:{
    type:String,
    default:''
  },
  show:{
    type:Boolean,
    default:false
  } */
},
data(){
  return {
    msg:'',
    isShow:false}
},
methods: {
  show(message,duration){
   this.isShow = true
   this.msg = message
    setTimeout(()=>{
      this.isShow = false
       this.message = ''
    },duration)
  }
},
}
</script>
<style  scoped>
.toast{
  position: fixed;
  top: 50%;
  left:50%;
  background:rgba(0, 0, 0, 0.7);
  color: white;
  padding:8px 10px;
  transform:translate(-50%,-50%);
  z-index: 999999;
}
</style>
