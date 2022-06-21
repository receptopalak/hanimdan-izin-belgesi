import { createApp } from 'vue'
import App from './App.vue'
// import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)
// app.use(BootstrapVue3)
app.component('DatePicker', Datepicker);

app.mount('#app')

