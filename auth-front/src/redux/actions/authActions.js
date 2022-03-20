import { FAIL, GET_ME, LOGOUT, SIGNIN, SIGNUP } from '../types/authTypes'
import axios from 'axios'
export const signup = (data, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/SignUp', data)
        dispatch({ type: SIGNUP, payload: res.data })
        navigate('/profile')
    } catch (error) {
        console.log("errors",error.response.data)
        dispatch({ type: FAIL, payload: error.response.data })
    }

}


export const signin = (data, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/SignIn', data)
        dispatch({ type: SIGNIN, payload: res.data });
        if (res.data.user.role=="freelancer"){
        return navigate('/profile')}
        if (res.data.user.role=="client"){
            return navigate('/feed')}
        if (res.data.user.role=="admin"){
            return navigate('/Dashboard')
        }
    } catch (error) {
        console.log("errors",error.response.data)
         
        dispatch({ type: FAIL, payload: error.response.data })
    }
}

export const getme = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    const config=
    {
        headers:
        {
            authorisation: token
        }
    }
    try {
        const res = axios.get('/auth/me', config)
        dispatch({ type: GET_ME, payload: res.data })
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data })
    }
}

export const logout = () => async (dispatch)=>
{
        dispatch({type: LOGOUT})
}