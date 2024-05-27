import { loginWithEmail, logoutFirebase, registerUserWithEmail, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"
import { checkingCredentials, login, logout } from "./authSlice"


// export const checkingAuthentication = (email, password) => {
//     return async (dispatch) => {
//         dispatch(checkingCredentials())


//     }
// }

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await signInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))

        return dispatch(login(result))
    }
}

export const registerWithEmailAndPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({ email, password, displayName })

        if (!ok) return dispatch(logout(errorMessage))

        dispatch(login({ uid, displayName, email, photoURL }))

    }
}

export const loginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await loginWithEmail({ email, password })
        const { ok, errorMessage, displayName, photoURL, uid } = result
        if (!ok) return dispatch(logout(errorMessage))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(clearNotesLogout())

        dispatch(logout())


    }
}