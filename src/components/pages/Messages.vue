<template>
  <div class="wrapper">
    <h1>Объявления</h1>
    <h4>Найдено: {{ $store.getters["posts/count"] }}</h4>
    <div class="post-cards">
      <div class="post-card" v-for="post in postsArr" :key="post.id">
        <div class="block-1">
          <div class="posts-form">
              {{ post.title }}
            <p class="text">
            {{ post.text }}
            </p>
          </div>
          <div class="btn-block">
            <!-- <button-comp @click="doDelete(post.title)">Удалить</button-comp> -->
            <!-- <button-comp >Редактировать</button-comp> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="background">
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
</div> -->
</template>

<script>
export default {
  computed: {
    postsArr() {
      return this.$store.getters["posts/all"];
    },
  },
  methods: {
    doDelete(title) {
      this.$store.dispatch("posts/deletePost", title);
    },
  },
};
</script>

<style scoped>
.post-card {
    border: 2px solid #012F34;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 20px;
}
.wrapper {
    display: block;
    max-width: 600px;
}
/* .background {
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
} */
</style>