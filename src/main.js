import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps';
import Antd from 'ant-design-vue'
/* asset imports */

import './assets/scss/main.scss';
import 'ant-design-vue/dist/antd.css';
/* plugins */
import VueScrollTo from 'vue-scrollto';
import VueYoutube from 'vue-youtube';
import BackToTop from 'vue-backtotop';

import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

Vue.use(VueScrollTo);
Vue.use(Antd);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBwANcBPoepQP0o7Yi6ToiYvoaIvgzi7Ts",
    libraries: "places"
  },
  installComponents: true
});
Vue.use(VueYoutube);
Vue.use(BackToTop);

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
