import axios from "axios"
export const getTic=(tic)=>{
    return{
        type:'GET_TIC',payload:tic
    }
}

export const setTic=(tic)=>{
    return{
        type:'SET_TIC',payload:tic
    }
}
export const deleteTic=(data)=>{
    return{
        type:'DELETE',payload:data 
    }
}
export const editTic=(data)=>{
    return{
        type:'EDIT',payload:data
    }
}
export const startGetTicket=()=>{
     return(dispatch)=>{
        axios.get('https://dct-tm.herokuapp.com/api/tickets',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
        // console.log( "dept",response.data)
         const emp=response.data
         dispatch(getTic(emp))
        })
        .catch((err)=>{
            console.log(err)
        })
     }
}
export const startPostTicket=(formdata)=>{
    console.log("formdata",formdata)
    return(dispatch)=>{

   axios.post('https://dct-tm.herokuapp.com/api/tickets',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "response ticket",response.data)
         const ticket=response.data
         dispatch(setTic(ticket))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startDeleteTicket=(id)=>{
    // console.log("deleteEmpID",id)
    return(dispatch)=>{

   axios.delete(`https://dct-tm.herokuapp.com/api/tickets/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
        //  console.log( "deleteEmp",response.data)
         const tic=response.data
         dispatch(deleteTic(tic))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startEditTicket=(id,formdata)=>{
    console.log("formdata",formdata)
    return(dispatch)=>{

   axios.put(`https://dct-tm.herokuapp.com/api/tickets/${id}`,formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "response ticket",response.data)
         const ticket=response.data
         dispatch(editTic(ticket))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}