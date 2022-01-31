import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default {
    namespaced: true,
    state() {
        return {
            email: '',
            uid: '',
        };
    },
    getters: {
        isauth(state) {
            return state.uid !== '';
        }
    },
    mutations: {

    },
    actions: {
        login(ctx, data) {

            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    ctx.state.uid = userCredential.user.uid;
                    return 'ok';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage);
                    return 'error';
                });
        },
        sign(ctx, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    ctx.state.uid = userCredential.user.uid;
                    return 'ok';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage);
                    return 'error';
                });
        },
        logout(ctx) {
            ctx.state.email = '';
            ctx.state.uid = '';
        }
    }

}

