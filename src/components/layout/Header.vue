<template>
    <div class="nav_menu">
        <div class="wrapper">
            <div class="header_logo">
                <router-link :to="{ name: 'Home' }"><img src="../../assets/header_logo.png" alt="header_logo"></router-link>
            </div>
            <div class="languages">
                <a>язык / мова</a>
            </div>
            <div class="messages">
                <router-link :to="{ name: 'Messages' }">Сообщения</router-link>
            </div>
            <div class="like">
                <router-link :to="{ name: 'Like' }">Избранные</router-link>
            </div>
            <div class="login">
                <!-- <router-link :to="{ name: 'Login' }">Мой профиль</router-link> -->
                <button
                class="button"
                @click="showModal"
                >Регистрация</button>
            </div>
            <div class="add_product">
                <router-link :to="{ name: 'AddProduct' }">Подать объявление</router-link>
            </div>
            <my-modal 
            v-if = "isVisible"
            @closeModal= "closeModal"
            >
            <my-login></my-login>
            </my-modal>
        </div>
    </div>
</template>

<script>
import myModal from "../Modal.vue"
import myLogin from "../pages/Login.vue"

export default {
    name:"myHeader",
    data() {
        return {
            isVisible: false
        }
    },
    components: {
        myModal,
        myLogin
    },
    methods: {
        showModal() {
            this.isVisible= true
        },
        closeModal() {
            this.isVisible= false
        }
    }
}
</script>

<style scoped>
.nav_menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    background-color: #002F34;
}
.nav_menu a {
    text-decoration: none;
    color: #FFFF;
}
.nav_menu a:hover {
    color: #7F9799;
}
.wrapper {
    display: flex;
    justify-content: space-around;
    width: 1180px;
    margin: 0;
}
.header_logo {
    margin-right: 60px;
}
.languages {
    color: #FFFF;
    cursor: pointer;
}
button {
    color: #002F34;
    border: 2px solid #FFFF;
    border-radius: 6px;
    background-color: #FFFF;
}
button:hover {
    color: #00d2e9;
}
</style>