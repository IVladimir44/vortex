import {createStore} from 'vuex'
import post from './modules/post';
import user from './user'
import posts from './posts'

const store = createStore ({
    modules: {
        post,
        user,
        posts,
    }
})

export default store

