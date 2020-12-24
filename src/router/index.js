/*
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 11:11:51
 * @LastEditTime: 2020-12-24 11:41:47
 * @LastEditors: BMB
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;