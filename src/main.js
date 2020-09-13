import Vue from 'vue'
import App from './App.vue'

import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.config.productionTip = false
Vue.use(KeenUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
