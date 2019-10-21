import {combineReducers} from 'redux'

let initState = {
    id: 0,
    username: '',
    email: ''
}

let authReducer = (state = initState, action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state, id:action.payload.id, username:action.payload.username, email: action.payload.email}
        
        case "LOGOUT_SUCCESS":
            return {...state, ...initState}

        default:
            return state
    }
}

let reducers = combineReducers(
    {
        auth: authReducer
    }
)

export default reducers