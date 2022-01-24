<template>
<div class="background">
    <div class="title_wrapper">
        <p class="messages_title">Сообщения</p>
    </div>
    <div class="messages_wrapper">
        <div class="messages">
            <ul class="messages_list">
                <li class="message">Сообщение</li>
                <li class="message">Сообщение</li>
                <li class="message">Сообщение</li>
                <li class="message">Сообщение</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.background {
    background-color: #F2F4F5;
    padding-bottom: 40px;
}
.title_wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1238px;
    background-color: #FFFF;
    border-radius: 6px;
}
.messages_wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1238px;
}
.messages_title {
    padding-top: 55px;
    padding-bottom: 30px;
    margin-left: 46px;
    font-size: 32px;
    font-weight: 500;
    line-height: 1;
    color: #002f34;
}
.messages_list {
list-style-type: none;
margin: 40px 16px 0 16px;
padding: 0;
}
.message {
    width: 1206px;
    height: 38px;
    padding: 16px;
    background-color: #FFFF;
}
</style>