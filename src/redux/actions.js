import  { CREATE_ACCOUNT, LOGIN, ADD_IMG} from "./types"

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

export function addImg(user){
    
    return{
        type: ADD_IMG,
        payload: user
    }
}