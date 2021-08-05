import CREATE_ACCOUNT from "./types"

const initalState = {
    //id: Number,
    //name: String,
    //password: String,
    users: [],
    //posts: [],
}

export const userReducer = (state = initalState, action) =>{
    switch (action.type){
        case CREATE_ACCOUNT:
            return {...state, users: state.users.concat([action.payload])}
        default: return state
    }
}
