<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title" required>
        <input type="text" placeholder="body" v-model="body" required>
        <button type="submit">Создать пост</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            title: '',
            body: ''
        };
    },
    methods: {
        ...mapMutations(['createPost']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
        }
    }
}
</script>


<style scoped>
input {
    display: block;
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
button {
    border: 1px solid rgb(223, 54, 54);
    border-radius: 4px;
    background-color: rgb(223, 54, 54);
}
</style>