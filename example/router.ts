import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('./views/home.vue')
const About = () => import('./views/about.vue')
const Dashboard = () => import('./views/dashboard.vue')
const Start = () => import('./views/start.vue')
const Theming = () => import('./views/theming.vue')

const Tools = () => import('./views/tools/index.vue')
const ToolsGlobal = () => import('./views/tools/global.vue')
const ToolsRequest = () => import('./views/tools/request.vue')
const ToolsCache = () => import('./views/tools/cache.vue')
const ToolsFunction = () => import('./views/tools/function.vue')

const Pages = () => import('./views/pages/index.vue')
const PagesLogin = () => import('./views/pages/login.vue')
const PagesRegister = () => import('./views/pages/register.vue')
const PagesForget = () => import('./views/pages/forget.vue')

const Components = () => import('./views/components/index.vue')
const ComponentsLayout = () => import('./views/components/layout.vue')
const ComponentsMenu = () => import('./views/components/menu.vue')
const ComponentsDropdown = () => import('./views/components/dropdown.vue')
const ComponentsNotice = () => import('./views/components/notice.vue')
const ComponentsModal = () => import('./views/components/modal.vue')
const ComponentsCaptcha = () => import('./views/components/captcha.vue')
const ComponentsSearch = () => import('./views/components/search.vue')
const ComponentsClock = () => import('./views/components/clock.vue')
const ComponentsPassword = () => import('./views/components/password.vue')
const ComponentsAnchor = () => import('./views/components/anchor.vue')
const ComponentsCode = () => import('./views/components/code.vue')
const ComponentsTitle = () => import('./views/components/title.vue')
const ComponentsQuote = () => import('./views/components/quote.vue')
const ComponentsBacktop = () => import('./views/components/backtop.vue')
const ComponentsSocialite = () => import('./views/components/socialite.vue')

const Advanced = () => import('./views/advanced/index.vue')
const AdvancedLanguage = () => import('./views/advanced/language.vue')
const AdvancedRouter = () => import('./views/advanced/router.vue')
const AdvancedNavigation = () => import('./views/advanced/navigation.vue')

const PassportLogin = () => import('./views/passport/login.vue')
const PassportRegister = () => import('./views/passport/register.vue')
const PassportForget = () => import('./views/passport/forget.vue')

const menuRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: { title: '首页' },
        component: Home,
        redirect: '/about',
        children: [{
            path: 'about',
            name: 'about',
            meta: { title: '关于 MAP' },
            component: About
        }, {
            path: 'dashboard',
            name: 'dashboard',
            meta: { title: '控制中心' },
            component: Dashboard
        }, {
            path: 'start',
            name: 'start',
            meta: { title: '快速上手' },
            component: Start
        }, {
            path: 'theming',
            name: 'theming',
            meta: { title: '主题定制' },
            component: Theming
        }, {
            path: '/tools',
            name: 'tools',
            meta: { title: '系统工具' },
            component: Tools,
            redirect: '/tools/global',
            children: [{
                path: '/tools/global',
                name: 'tools-global',
                meta: { title: '全局变量' },
                component: ToolsGlobal
            }, {
                path: '/tools/request',
                name: 'tools-request',
                meta: { title: '请求响应' },
                component: ToolsRequest
            }, {
                path: '/tools/cache',
                name: 'tools-cache',
                meta: { title: '本地缓存' },
                component: ToolsCache
            }, {
                path: '/tools/function',
                name: 'tools-function',
                meta: { title: '工具函数' },
                component: ToolsFunction
            }]
        }, {
            path: '/pages',
            name: 'pages',
            meta: { title: '常用页面' },
            component: Pages,
            redirect: '/pages/login',
            children: [{
                path: '/pages/login',
                name: 'pages-global',
                meta: { title: '登录页面' },
                component: PagesLogin
            }, {
                path: '/pages/register',
                name: 'pages-register',
                meta: { title: '注册页面' },
                component: PagesRegister
            }, {
                path: '/pages/forget',
                name: 'pages-forget',
                meta: { title: '忘记密码' },
                component: PagesForget
            }]
        }, {
            path: '/components',
            name: 'components',
            meta: { title: '定制组件' },
            component: Components,
            redirect: '/components/layout',
            children: [{
                path: '/components/layout',
                name: 'components-layout',
                meta: { title: '基础布局' },
                component: ComponentsLayout
            }, {
                path: '/components/menu',
                name: 'components-menu',
                meta: { title: '左侧菜单' },
                component: ComponentsMenu
            }, {
                path: '/components/notice',
                name: 'components-notice',
                meta: { title: '消息中心' },
                component: ComponentsNotice
            }, {
                path: '/components/clock',
                name: 'components-clock',
                meta: { title: '精美钟表' },
                component: ComponentsClock
            }, {
                path: '/components/modal',
                name: 'components-modal',
                meta: { title: '弹窗提示' },
                component: ComponentsModal
            }, {
                path: '/components/captcha',
                name: 'components-captcha',
                meta: { title: '滑块验证' },
                component: ComponentsCaptcha
            }, {
                path: '/components/search',
                name: 'components-search',
                meta: { title: '搜索联想' },
                component: ComponentsSearch
            }, {
                path: '/components/password',
                name: 'components-password',
                meta: { title: '密码设置' },
                component: ComponentsPassword
            }, {
                path: '/components/dropdown',
                name: 'components-dropdown',
                meta: { title: '下拉菜单' },
                component: ComponentsDropdown
            }, {
                path: '/components/anchor',
                name: 'components-anchor',
                meta: { title: '锚点链接' },
                component: ComponentsAnchor
            }, {
                path: '/components/code',
                name: 'components-code',
                meta: { title: '代码高亮' },
                component: ComponentsCode
            }, {
                path: '/components/title',
                name: 'components-title',
                meta: { title: '标题设置' },
                component: ComponentsTitle
            }, {
                path: '/components/quote',
                name: 'components-quote',
                meta: { title: '引用说明' },
                component: ComponentsQuote
            }, {
                path: '/components/backtop',
                name: 'components-backtop',
                meta: { title: '回到顶部' },
                component: ComponentsBacktop
            }, {
                path: '/components/socialite',
                name: 'components-socialite',
                meta: { title: '授权登陆' },
                component: ComponentsSocialite
            }]
        }, {
            path: '/advanced',
            name: 'advanced',
            meta: { title: '高级应用' },
            component: Advanced,
            redirect: '/advanced/language',
            children: [
                {
                    path: '/advanced/language',
                    name: 'advanced-language',
                    meta: { title: '语系管理', auth: true },
                    component: AdvancedLanguage
                },
                {
                    path: '/advanced/router',
                    name: 'advanced-router',
                    meta: { title: '路由管理', auth: true },
                    component: AdvancedRouter
                },
                {
                    path: '/advanced/navigation',
                    name: 'advanced-navigation',
                    meta: { title: '导航管理', auth: true },
                    component: AdvancedNavigation
                }
            ]
        }]
    }
]

const passportRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'single-login',
        meta: { title: '登录' },
        component: PassportLogin
    },
    {
        path: '/login/:socialite/:token',
        name: 'socialite-login',
        meta: { title: '社会化账号授权登录' },
        component: PassportLogin
    },
    {
        path: '/register',
        name: 'single-register',
        meta: { title: '注册' },
        component: PassportRegister
    },
    {
        path: '/forget',
        name: 'single-forget',
        meta: { title: '忘记密码' },
        component: PassportForget
    }
]

const routes: Array<RouteRecordRaw> = [
    ...menuRoutes,
    ...passportRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => {
        return { top: 1 }
    }
})
export default router