import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const userService = {
    login(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorCode;
        })
    }
}

export default userService;