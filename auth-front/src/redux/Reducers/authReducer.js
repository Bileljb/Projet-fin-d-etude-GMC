import { FAIL, GET_ME, LOGOUT, SIGNIN, SIGNUP} from '../types/authTypes'
const initialState =
{
    user: null,
    auth: false,
    errors: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:  
        case SIGNIN:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.user, auth: true }
         case GET_ME:
            return {...state, user: action.payload, auth: true}

        case FAIL:
            return { ...state, errors: action.payload.errors, auth: false }

        case LOGOUT: 
            localStorage.removeItem('token')
            return {...state,auth: false, user:null }

        default:
            return state
    }
}

export default authReducer