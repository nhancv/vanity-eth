import Vue from 'vue';
import Clipboard from 'v-clipboard';
import VueToast from 'vue-toast-notification';
import App from './App.vue';
import './registerServiceWorker';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;
Vue.use(Clipboard);
Vue.use(VueToast);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
