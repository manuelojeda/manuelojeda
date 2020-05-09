/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
// import './plugins/ApexCharts'
import './plugins/CompositionApi';
import './plugins/FontAwesome';
import './plugins/Typography';
import './plugins/Bootstrap';

import AdminLayout from './layouts/Admin.vue';
import PublicLayout from './layouts/Public.vue';
import PublicHeader from './components/public/PxHeader.vue';
import AdminHeader from './components/admin/PxHeader.vue';

Vue.component('public-layout', PublicLayout);
Vue.component('admin-layout', AdminLayout);
Vue.component('public-header', PublicHeader);
Vue.component('admin-header', AdminHeader);

Vue.component('public-index', () => import(/* webpackChunkName: "PublicIndex" */ './pages/Public/Index.vue'));
Vue.component('portfolio', () => import(/* webpackChunkName: "Portfolio" */ './pages/Public/Portfolio.vue'));
Vue.component('education', () => import(/* webpackChunkName: "Education" */ './pages/Public/Education.vue'));

Vue.component('admin-dashboard', () => import(/* webpackChunkName: "PublicIndex" */ './pages/Intranet/Index.vue'));

const app = new Vue({
  el: '#app',
});
