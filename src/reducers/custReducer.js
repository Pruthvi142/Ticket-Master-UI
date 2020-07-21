const custIntitialState={}
const custReducer=(state=[],action)=>
{
    switch(state,action.type)
    {
        case 'SET_CUST' : {
            return state.concat(action.payload)
        }
        case 'GET_CUST':{
            return [].concat(action.payload)
        }
        
        case 'DELETE':{
            return state.filter(ele=>ele._id !=action.payload._id)
        }
        case 'EDIT':{
            return  state.map(ele=>{
                if(ele._id == action.payload._id) {
                    return Object.assign({}, ele, action.payload)
                } else {
                    return Object.assign({}, ele)
                }
            })
        }
    
        default:{
            return state
        }
    }
}
export default custReducer