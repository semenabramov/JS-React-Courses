import CREATE_ACCOUNT from './types'

export function createAccount(user){
    return{
        type: CREATE_ACCOUNT,
        payload: user
    }
}