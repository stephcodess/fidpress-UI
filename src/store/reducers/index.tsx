import { combineReducers } from "redux";

//reducers
import login from './login'
import signup from './signup'
import auth from './auth'
import airtime from "./airtime";
import users from "./users";
import transactions from "./transactions";
import electricity from "./electricity";

/**
 * @function rootReducer 
 * @description It combines all  the reducers and share within nested components
 */
const rootReducer = combineReducers({
    login,
    signup,
    auth,
    airtime,
    users,
    transactions,
    electricity
})

export default rootReducer