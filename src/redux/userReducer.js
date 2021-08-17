import  { CREATE_ACCOUNT, LOGIN, ADD_IMG, EXIT } from "./types"


const initalState = {
    //id: Number,
    //name: String,
    //password: String,
    activeld: 0,
    users: [
        {
            id: 1,
            name: 'Simon',
            password: '123',
            img: []
        },
        {
            id: 2,
            name: 'Alex',
            password: '123',
            img: []
        }],
    //posts: [],
}

export const userReducer = (state = initalState, action) =>{
    switch (action.type){
        case CREATE_ACCOUNT:
            return {...state, users: state.users.concat([action.payload])}
        case LOGIN:
            return {...state, activeld: action.payload.id }
        case ADD_IMG:
            return {...state, users: [...state.users.slice(0,action.payload.id-1), action.payload, ...state.users.slice(action.payload.id)]}
        case EXIT:
            return {...state, activeld: 0 }
        default: return state
    }
}
