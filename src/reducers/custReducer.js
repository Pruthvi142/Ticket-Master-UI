const custIntitialState={}
const custReducer=(state=[],action)=>
{
    switch(state,action.type)
    {
        case 'SET_CUST' : {
            return state.concat(action.payload)
        }
        case 'DELETE':{
            return state.filter(ele=>ele._id !=action.payload._id)
        }
    
        default:{
            return state
        }
    }
}
export default custReducer