import vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// nprogress样式文件
import routesList from "./routesList";

vue.use(Router)

const router=new Router({
    mode:'hash',
    routes:[
        { path: '/', component: resolve => import('../page/index.vue'), children: routesList },
        // {path:'/',component : resolve=>import('../page/oneIndex.vue')},
        // {path:'/love',component : resolve=>import('../page/LoveSosoi.vue')}
    ]

})
NProgress.configure({
    easing: 'ease-in-out',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
//当路由开始跳转时
router.beforeEach((to, from , next) => {
    // 开启进度条
    NProgress.start();
    // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
    setTimeout(()=>{
        next();

    },1000)
});
//当路由跳转结束后
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})

export default router;