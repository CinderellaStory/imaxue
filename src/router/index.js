import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import list from '@/view/list'
import search from '@/view/search'
import fans from '@/view/settings/fans'
import follows from '@/view/settings/follows'
import collect from '@/view/settings/collect'
import study from '@/view/settings/study'

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
        }
    ]
})