import { combineReducers } from "redux";
import authReducer from "./authReducer";
import GigReducer from "./freelancerReducer";
import FreelancerReducer from "./adminReducer"
const rootReducer = combineReducers({authReducer,GigReducer,FreelancerReducer})
export default rootReducer