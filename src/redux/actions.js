import  { CREATE_ACCOUNT, LOGIN, ADD_IMG, EXIT, EDIT_IMG, DELETE_IMG} from "./types"

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

export function deleteImg(user){
    return{
        type: DELETE_IMG,
        payload: user
    }
}

export function editImg(user){
    return{
        type: EDIT_IMG,
        payload: user
    }
}


export function exit(){
    return{
        type: EXIT,
    }
}
