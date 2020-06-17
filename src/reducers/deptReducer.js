const custIntitialState={}
const deptReducer=(state=[],action)=>{
    switch(state,action.type)
    {
        case 'ADD_DEPT':{
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
export default  deptReducer