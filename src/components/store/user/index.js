import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function isValidToken(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            user: '',
        };
    },
    getters: {
        isauth(state) {
            return isValidToken(state.user);
        },
        email(state) {
            return state.email;
        }
    },
    mutations: {
        setUser(state, data) {
            state.email = data.email;
            state.user = data.uid;
        }
    },
    actions: {
        login(ctx, data) {

            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    ctx.state.user = userCredential.user;
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
                    ctx.state.user = userCredential.user;
                    return 'ok';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage);
                    return 'error';
                });
        },
        logout(ctx) {
            const auth = getAuth();
            signOut(auth).then(() => {
                ctx.state.user = '';
            })
        }
    }

}

