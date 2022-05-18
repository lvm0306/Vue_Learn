export default [
	{ path: '/', meta: { title: "首页" }, component: resolve => import('../page/oneIndex'),children: [
            { path: '/', meta: { title: "首页" }, component: resolve => import('../page/menuPage') },
            { path: '/circulate', meta: { title: "循环练习" }, component: resolve => import('../page/circulatePage') },
            { path: '/formwork', meta: { title: "模板语法练习" }, component: resolve => import('../page/formworkPage') },
		] },
	// { path: '/circulate', meta: { title: "循环练习" }, component: resolve => import('../page/circulatePage') },
	// { path: '/formwork', meta: { title: "模板语法练习" }, component: resolve => import('../page/formworkPage') },
	// { path: '/recharge', meta: { title: "会员充值" }, component: resolve => import('pages/recharge') },
	// { path: '/equipment', meta: { title: "器材展示" }, component: resolve => import('pages/equipment') },
	// { path: '/lost', meta: { title: "遗失物品" }, component: resolve => import('pages/lost') },
	// { path: '/goods', meta: { title: "商品列表" }, component: resolve => import('pages/goods') },
	// { path: '/coach', meta: { title: "教练风采" }, component: resolve => import('pages/coach') },
	// { path: '/order', meta: { title: "预约" }, component: resolve => import('pages/order') },
	// { path: '/orderList', meta: { title: "预约计划" }, component: resolve => import('pages/orderList') }
];