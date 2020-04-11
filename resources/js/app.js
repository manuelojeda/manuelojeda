import './bootstrap'
import Vue from 'vue'

Vue.component('public-layout', require('./layouts/Public.vue').default);

Vue.component('public-index', () => import(/* webpackChunkName: "PublicIndex" */ './pages/Public/Index.vue'))

new Vue({
    el: '#app',
});
