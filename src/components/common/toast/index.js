import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue){
  //默认传递一个参数就是vue
 // console.log("执行了obj的install",Vue);
 /* console.log(Toast.$el);
 document.body.appendChild(Toast.$el) */

//创建构造器
const toastConstructor = Vue.extend(Toast)
//new的方式，根据构造器可以创建出来一个组件对象
const toast = new toastConstructor()
//将组件对象手动挂载到一个元素上
toast.$mount(document.createElement('div'))
//toast.$el 对应的就是上边被挂载的div
//将整个对象添加到body里
document.body.appendChild(toast.$el)
//console.log(toast);
 Vue.prototype.$toast = toast
}
export default obj