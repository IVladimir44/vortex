<template>
    <div class="nav_menu">
        <div class="header_logo">
            <router-link :to="{ name: 'Home' }"><img src="../../assets/header_logo.png" alt="header_logo"></router-link>
        </div>
        <div class="messages">
            <router-link :to="{ name: 'Messages' }">Сообщения</router-link>
        </div>
        <div class="like">
            <router-link :to="{ name: 'Like' }">Избранное</router-link>
        </div>
        <div class="login">
            <router-link :to="{ name: 'Login' }">Мой профиль</router-link>
        </div>
        <div class="add_product">
            <router-link :to="{ name: 'AddProduct' }">Подать объявление</router-link>
        </div>
    </div>
</template>

<script>
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
    color: #FFFFFF;
}
.nav_menu a:hover {
    color: #7F9799;
}
</style>