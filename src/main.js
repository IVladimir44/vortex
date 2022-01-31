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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaxQZNDJaMKXFcavCum8XI_bBnJ_XfJrI",
  authDomain: "vortex-344b6.firebaseapp.com",
  projectId: "vortex-344b6",
  storageBucket: "vortex-344b6.appspot.com",
  messagingSenderId: "345306529159",
  appId: "1:345306529159:web:2c09ab6a6a7dd2ad1ca722",
  measurementId: "G-VMN5P7E1Z1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics(app);


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