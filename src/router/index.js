import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import list from '@/view/list'
import search from '@/view/search'
import fans from '@/view/settings/fans'
import follows from '@/view/settings/follows'
import collect from '@/view/settings/collect'
import study from '@/view/settings/study'
import order from '@/view/settings/order'
import my from '@/view/settings/my'
import teachers from '@/view/settings/teachers'
import userinfo from '@/view/settings/userinfo'
import accountbind from '@/view/settings/accountbind'
import modifypsd from '@/view/settings/modifypsd'
import myhome from '@/view/settings/myhome'
import video from '@/view/video'
import details from '@/view/details'
import sureorder from '@/view/sureorder'
import cart from '@/view/cart'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/list',
            component: list
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/settings/fans',
            component: fans
        },
        {
            path: '/settings/follows',
            component: follows
        },
        {
            path: '/settings/collect',
            component: collect
        },
        {
            path: '/settings/study',
            component: study
        },
        {
            path: '/settings/order',
            component: order
        },
        {
            path: '/settings/my',
            component: my
        },
        {
            path: '/settings/teachers',
            component: teachers
        },
        {
            path: '/settings/userinfo',
            component: userinfo
        },
        {
            path: '/settings/accountbind',
            component: accountbind
        },
        {
            path: '/settings/modifypsd',
            component: modifypsd
        },
        {
            path: '/settings/myhome',
            component: myhome
        },
        {
            path: '/video',
            component: video
        },
        {
            path: '/details',
            component: details
        },
        {
            path: '/sureorder',
            component: sureorder
        },
        {
            path: '/cart',
            component: cart
        }
    ]
})