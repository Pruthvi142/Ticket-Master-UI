import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducer from "../reducers/userReducer"
import custReducer from "../reducers/custReducer"
import deptReducer from "../reducers/deptReducer"
import empReducer from "../reducers/empReducer"
import ticReducer from "../reducers/ticReducer"


const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        customers:custReducer,
        departments:deptReducer,
        Employees:empReducer,
        Tickets:ticReducer
      
        
    }),applyMiddleware(thunk))
    return store 
}
export default configureStore