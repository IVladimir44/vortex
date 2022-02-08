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

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCaxQZNDJaMKXFcavCum8XI_bBnJ_XfJrI",
  authDomain: "vortex-344b6.firebaseapp.com",
  databaseURL: "https://vortex-344b6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "vortex-344b6",
  storageBucket: "vortex-344b6.appspot.com",
  messagingSenderId: "345306529159",
  appId: "1:345306529159:web:2c09ab6a6a7dd2ad1ca722",
  measurementId: "G-VMN5P7E1Z1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const db = getDatabase();
const postsRef = ref(db, '/posts');
onValue(postsRef, (snapshot) => {
  console.log("snapshot: ", snapshot.val());
});


import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/messages', name: 'Messages', component: Messages },
    { path: '/like', name: 'Like', component: Like },
    { path: '/login', name: 'Login', component: Login },
    { path: '/add', name: 'AddProduct', component: AddProduct },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('user/setUser', user);
  } else {
    store.dispatch('user/logout');
  }
});

const app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app');