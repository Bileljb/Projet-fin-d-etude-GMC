import { GET_CARD, GET_CARDS, TOGGLE_FALSE, TOGGLE_TRUE, GET_ALL_CARDS } from "../types/freelancerTypes";

const initialState = {
    gigs: [],
    edit: false,
    gig: null
};

const GigReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_ALL_CARDS:
            return{...state, gigs: payload.Allgigs}
        case GET_CARDS:
            return {...state, gigs: payload.Gigs}

        case TOGGLE_TRUE:
            return {...state, edit: true}

        case TOGGLE_FALSE:
            return {...state, edit: false}
        case GET_CARD:
            return {...state, gig: payload.Foundgig}

        default:
            return state;
        }
    };
    export default GigReducer