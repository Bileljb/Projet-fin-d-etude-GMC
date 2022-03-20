import { GET_CARDS, TOGGLE_FALSE, TOGGLE_TRUE, GET_CARD, GET_ALL_CARDS } from '../types/freelancerTypes'
import axios from 'axios'
export const get_gigs = () => async (dispatch) => {
    const config={
        headers:{
            authorisation:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get("/gigs",config)
        console.log(res)
        dispatch(
            {
                type: GET_CARDS,
                payload: res.data
            });
    } catch (error) {
        console.log(error)
    }
}


export const get_gigs_forclient = () => async (dispatch) => {
    
    try {
        const res = await axios.get("/gigs/allgigs")
        console.log(res)
        dispatch(
            {
                type: GET_ALL_CARDS,
                payload: res.data
            });
    } catch (error) {
        console.log({ msg: 'Sorry something went wrong', error })
    }
}

export const add_gig= (newgig)=> async(dispatch)=>{
    const config={
        headers:{
            authorisation:localStorage.getItem('token')
        }
    }
    try {
        await axios.post("/gigs/PostGig", newgig,config)
        dispatch(get_gigs())
    } catch (error) {
        console.log(error)
    }
}

export const delete_gig = (id) => async(dispatch)=>{

    try {
        await axios.delete(`/gigs/${id}`)
        dispatch(get_gigs())
    } catch (error) {
        console.log(error)
    }
}

export const edit_gig = (id, data)=> async(dispatch)=>{
    try {
        await axios.put(`/gigs/${id}`, data)
        dispatch(get_gigs())
    } catch (error) {
        console.log(error)
    }
}

export const togglefalse = ()=>{
    return {type: TOGGLE_FALSE}
}

export const toggletrue = ()=>{
    return {type: TOGGLE_TRUE}
}


export const get_one_gig =(id)=> async(dispatch)=>{
    try {
        const res = await axios.get(`/gigs/${id}`)
        dispatch({type: GET_CARD, payload: res.data})
    } catch (error) {
        console.log({ msg: 'Sorry something went wrong', error })
    }

}
