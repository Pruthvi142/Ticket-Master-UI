const empReducer=(state=[],action)=>{
    switch(state,action.type)
    {
        case 'SET_EMP' : {
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

export default empReducer