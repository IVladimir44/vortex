import { getDatabase, ref, set, update } from "firebase/database";

export default {
    namespaced: true,
    state() {
        return {
            posts: [],
            initLoad: false,
        };
    },
    mutations: {
        addPost(state, data) {
            state.posts.push(data);
        },
        clear(state) {
            state.posts = [];
        }
    },
    actions: {
        createPost(context, data) {
            data.id = new Date();
            const db = getDatabase();
            set(ref(db, 'posts/' + data.id), data);
        },
        updatePost(context, data) {
            const updates = {};
            updates['/posts/' + data.id] = data;
            const db = getDatabase();
            return update(ref(db), updates);
        },
        deletePost(context, id) {
            const updates = {};
            updates['/posts/' + id] = null;
            const db = getDatabase();
            return update(ref(db), updates);
        }
    },
    getters: {
        count(state) {
            return state.posts.length;
        },
        all(state) {
            return state.posts;
        },
        newsPosts(state) {
            return state.posts.filter(post => post.type === 'news');
        },
        postById(state) {
            return (id) => state.posts.find(item => item.id === id);
        }
    }
}