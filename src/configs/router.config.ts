exports.routes = 
    [
        {   
            path: '/', 
            component: '@/layout/index',
            routes: [
                { path: '/', component: '@/pages/index', title: 'Hi, 欢迎回来' },
                { path: '/main/rendering-elements', component: '@/pages/main/eleCreate', title: '元素渲染' },
                { path: '/main/componentsAndProps', component: '@/pages/main/componentsAndProps', title: '组件&props' },
                { path: '/main/stateAndLifecycle', component: '@/pages/main/stateAndLifecycle', title: 'state&生命周期' },
                { path: '/main/event', component: '@/pages/main/event', title: '事件处理' },
                { path: '/main/list', component: '@/pages/main/list', title: '列表渲染' },
                { path: '/main/form', component: '@/pages/main/form', title: '表单' },
                { path: '/main/stateup', component: '@/pages/main/stateup', title: '状态提升' },
                { path: '/main/relationship', component: '@/pages/main/relationship', title: '组合&继承' },
                { path: '/guide/context', component: '@/pages/guide/context', title: 'context' },
                {component: '@/pages/404'}
            ]
        },
        {component: '@/pages/404'}
    ]
