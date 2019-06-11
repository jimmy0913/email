import Vue from 'vue'
import App from './App.vue'

import router from './router';

// 引入全部组件
import Mint from 'mint-ui';
import '@/assets/css/base.less';
import 'mint-ui/lib/style.min.css';


Vue.use(Mint);

Vue.config.productionTip = false


new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
