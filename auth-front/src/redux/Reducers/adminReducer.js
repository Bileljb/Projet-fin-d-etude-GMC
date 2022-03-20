import {GET_FREELANCERS}  from '../types/adminTypes'

const initialState=
{
    freelancers:[]
};

const FreelancerReducer=(state=initialState, {type, payload})=>{
    switch (type) {
        case GET_FREELANCERS:
            return {...state, freelancers: payload.Freelancers}
        default:
            return state;
    }
}

export default FreelancerReducer