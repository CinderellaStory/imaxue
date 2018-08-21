import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import list from '@/view/list'

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
        }
    ]
})