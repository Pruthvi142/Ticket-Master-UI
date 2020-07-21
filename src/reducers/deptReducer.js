const custIntitialState={}
const deptReducer=(state=[],action)=>{
    switch(state,action.type)
    {
        case 'ADD_DEPT':{
            return state.concat(action.payload)
        }
        case 'GET_DEPT':{
            return [].concat(action.payload)
        }
        case 'EDIT_DEPT':{
            return state.map(ele=>{
                if(ele._id===action.payload._id)
                {
                    return Object.assign({},ele,action.payload)
                }
                else{
                    return Object.assign({},ele)
                }
            })
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