import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('w-button', Button);
Vue.component('w-icon', Icon);
Vue.component('w-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    msg: 'hi, vue.js',
    loading1: true,
    loading2: true,
    loading3: false,
    loading4: false
  }
});