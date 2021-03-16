import Vue from 'vue';
import App from './components/App.vue';
import './styles/index.css';

const vm = new Vue({
  render: (h) => h(App),
});
vm.$mount('#app');
