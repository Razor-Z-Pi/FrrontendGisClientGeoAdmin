import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css'; //Vuesax styles
import router from './router'

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
