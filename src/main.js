/*
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 11:11:51
 * @LastEditTime: 2020-12-25 09:10:10
 * @LastEditors: BMB
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import VueCodemirror from 'vue-codemirror';

import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueCodemirror);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');