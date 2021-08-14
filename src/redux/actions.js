import  { CREATE_ACCOUNT, LOGIN } from "./types"

export function createAccount(user){
    return{
        type: CREATE_ACCOUNT,
        payload: user
    }
}

export function Login(user){
    return{
        type: LOGIN,
        payload: user
    }
}