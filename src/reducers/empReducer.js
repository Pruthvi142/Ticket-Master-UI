const empReducer=(state=[],action)=>{
    switch(state,action.type)
    {
        case 'SET_EMP' : {
            return state.concat(action.payload)
        }
        case 'GET_EMP' :{

            return [].concat(action.payload)

        } 
        case 'EDIT_EMP':{
            return state.map((ele)=>{
                if(ele._id==action.payload._id)
                {
                    return Object.assign({},ele,action.payload)
                }
                else
                {
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

export default empReducer