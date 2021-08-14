import  { CREATE_ACCOUNT, LOGIN } from "./types"


const initalState = {
    //id: Number,
    //name: String,
    //password: String,
    activeld: 0,
    users: [],
    //posts: [],
}

export const userReducer = (state = initalState, action) =>{
    switch (action.type){
        case CREATE_ACCOUNT:
            return {...state, users: state.users.concat([action.payload])}
        case LOGIN:
            return {...state, activeld: action.payload.id }
        default: return state
    }
}
