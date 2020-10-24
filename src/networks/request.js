import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'127.0.0.1',
    timeout:5000
  })

//创建axios拦截器
instance.interceptors.request.use(config=>{
  return config
},err=>{console.log("地址访问coderwhy老师的微信哦");})
//响应拦截
instance.interceptors.response.use(res=>{
return res.data
},err=>{console.log("地址访问coderwhy老师的微信哦")})

return instance(config)
//返回的是promise对象
}