import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css'; // Pastikan file ini ada di folder src

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Tambahkan ikon ke library
library.add(fas);

const app = createApp(App);

// Register komponen FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
