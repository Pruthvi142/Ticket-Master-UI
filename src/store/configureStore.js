import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userReducer from "../reducers/userReducer"
import custReducer from "../reducers/custReducer"
import deptReducer from "../reducers/deptReducer"
import empReducer from "../reducers/empReducer"


const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        customers:custReducer,
        departments:deptReducer,
        Employees:empReducer
      
        
    }),applyMiddleware(thunk))
    return store 
}
export default configureStore