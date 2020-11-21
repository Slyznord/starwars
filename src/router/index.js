import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// Views
import home from '@/views/home'

// Components
import detail from '@/views/detail'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { path: '/people' }
    },
    {
        path: '/people',
        name: 'home',
        component: home,
        beforeEnter: (to, from, next) => {
            store.dispatch('getData', to.query.page)
            next();
        }
    },  
    {
        path: '/person/:id',
        name: 'detail',
        component: detail,
        beforeEnter: (to, from, next) => {
            store.dispatch('getData', from.query.page)
            next();
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
