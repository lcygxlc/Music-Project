import Vue from 'vue'
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'
import intercept from "./plugins/intercept";

Vue.config.productionTip = false
Vue.use(intercept)
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(Lazyload, {
  lazyComponent: true,
});

export default {
  data() {
    return {
      
    };
  },
};

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
