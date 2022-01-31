import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Home from './components/pages/Home.vue';
import Messages from './components/pages/Messages.vue';
import Like from './components/pages/Like.vue';
import Login from './components/pages/Login.vue';
import AddProduct from './components/pages/AddProduct.vue';
import store from './components/store'


import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/', name: 'Messages', component: Messages },
    { path: '/', name: 'Like', component: Like },
    { path: '/', name: 'Login', component: Login },
    { path: '/', name: 'AddProduct', component: AddProduct },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app');