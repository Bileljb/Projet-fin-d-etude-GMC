import {GET_FREELANCERS} from '../types/adminTypes'
import axios from 'axios'
export const get_freelancers = () => async (dispatch) => {
    try {
        const res = await axios.get("/dashboard/Freelancers")
        console.log(res)
        dispatch(
            {
                type: GET_FREELANCERS,
                payload: res.data
            });
    } catch (error) {
        console.log(error)
    }
}

export const delete_freelancer = (id) => async(dispatch)=>{

    try {
        await axios.delete(`/dashboard/${id}`)
        dispatch(get_freelancers())
    } catch (error) {
        console.log(error)
    }
}