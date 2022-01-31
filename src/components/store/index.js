import {createStore} from 'vuex'
import post from './modules/post';
import user from './user'

const store = createStore ({
    modules: {
        post,
        user,
    }
})

export default store

