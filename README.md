### 本项目是根据coderwhy老师的美丽说项目的仿写练习之作，主体使用框架vue 2.x,better-scroll 2.x，数据来源是老师的私人服务器。
该项目主要根据底部tabBar将项目页面划分为首页，分类，购物车和我的，其中首页又隐含了详情页的制作。
### 数据获取
通过axios，建立网络请求，根据不同的页面对数据的需求，封装不同的请求函数，并导出
### 建立项目，规划项目目录
通过vue-cli框架，搭建项目，项目目录src文件夹下主要包含  
assets-存放静态文件  
common-存放公共的js文件  
components-存放需要用到的组件 
networks-存放网络请求相关的内容  
router-存放路由相关的内容  
store-存放vuex相关的内容  
view-存放各个页面相关的组件或内容  
### 首页
主要展示了轮播图，推荐信息，商品信息。  
轮播图是使用直接封装好的组件。  
推荐信息是根据获取到的图文信息，封装成一个小型的组件，组件主要应用了flex布局。   
商品信息是根据获取到的信息封装成一个组件，该组件可以被其他页面复用，该组件里包含一个可以循环渲染的子组件，子组件用来展示每个的商品内容，它包含一个图片，3个不同样式的文本。  
除此之外，首页还封装了一个小的返回顶部的插件，该插件是一张图片，在页面滑动到一定位置时会出现。
整个首页的滚动依赖于外部插件better-scroll，使用better-scroll的一个注意点是需要在页面内容加载的时候重新刷新一下scroll，让它重新计算高度。  
点击图片会进入详情页，这时会传递一个商品的iid值，该值在后续页面的开发和使用中也有作用。
### 详情页
详情页主要展示了轮播图，商品的相关信息，店铺的相关信息，以及推荐的商品，底部的导航等。本页面的滚动也是依赖于better-scroll。   
每一部分信息都是会封装成一个组件，根据需要进行样式添加和布局。  
比较值得注意的一个组件是顶部的导航，他会随着滚动的位置的不同，改变对应导航的样式，这一点需要监听scroll滚动的position拿来和每个小组件开始的offestTop作比较。  
除此之外，添加购物车时会根据当前商品添加到购物车的数量变化展现不同的toast，toast也是自己封装的组件，根据传入的信息和事件展示出一个出现一定时间的提示框，不同于其他组件，该组件是安装在main.js文件中的，调用时需要使用this.$toast  
添加到购物车的商品信息可以通过vuex进行管理和获取。
###  购物车
该页面主要展示添加到购物车的商品的信息。
该页面主要由商品列表和底部的计算汇总组件组成。
商品列表是一个组件，该组件用来规定整个列表的样式，该组件包含了scroll和一个每项商品的子组件，每项商品子组件确定了列表中展示的每个商品的图片，文字，数量等信息，它的信息是通过父组件获取，父组件的信息是通过Vuex的getters获取。  
计算汇总组件包含了一个全选按钮和一个汇总的内容，汇总的内容是根据vuex的商品的价格计算，全选按钮是根据列表中的商品是否具有商品标识checked确定的。
### 分类
分类页面目前主要包含左边的菜单和右边对应的列表。  
两部分都是被scroll组件包裹，根据获取的信息进行对应的布局展示。主要使用了flex布局。
### 我的
我的页面目前只进行了页面布局，分为个人信息，账户信息，以及相关列表展示。  
后续有时间会对该页面进行进一步优化，添加用户登录注册等功能。
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
