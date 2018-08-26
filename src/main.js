import Vue from 'vue'
import App from './App.vue'

import ChromeService from './service/chrome';
import LocalStorage from './service/localStorage';

Vue.prototype.$chrome = new ChromeService();
Vue.prototype.$localStorage = new LocalStorage();
new Vue({
  el: '#app',
  render: h => h(App)
});

