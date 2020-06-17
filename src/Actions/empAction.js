import axios from "axios"

export const setEmp=(emp)=>{
    return{
        type:'SET_EMP',payload:emp
    }
}
export const deleteEmp=(data)=>{
    return{
        type:'DELETE',payload:data 
    }
}
export const startGetEmp=()=>{
     return(dispatch)=>{
        axios.get('http://dct-tm.herokuapp.com/api/employees',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "dept",response.data)
         const emp=response.data
         dispatch(setEmp(emp))
        })
        .catch((err)=>{
            console.log(err)
        })
     }
}
export const startPostEmp=(formdata)=>{
    console.log("formdata",formdata)
    return(dispatch)=>{

   axios.post('http://dct-tm.herokuapp.com/api/employees',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "emp",response.data)
         const emp=response.data
         dispatch(setEmp(emp))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startDeleteEmp=(id)=>{
    console.log("deleteEmpID",id)
    return(dispatch)=>{

   axios.delete(`http://dct-tm.herokuapp.com/api/employees/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "deleteEmp",response.data)
         const emp=response.data
         dispatch(deleteEmp(emp))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}