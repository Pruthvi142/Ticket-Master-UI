const IntitialState={}
const userReducer=(state={},action)=>
{
    switch(state,action.type)
    {
            case 'SET_USER' : {
            return [].concat(action.payload)
        }
      
    
        default:{
            return {...state}
        }
    }
}
export default userReducer