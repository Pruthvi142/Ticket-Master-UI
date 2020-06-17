import axios from "axios"

export const setDept=(dept)=>{
    return {
        type:'ADD_DEPT',payload:dept
    }
}
export const deleteDept=(data)=>{
    return {
        type:'DELETE',payload:data
    }

    }

export const startGetDept=()=>{
    return(disptach)=>{
        axios.get('http://dct-tm.herokuapp.com/api/departments',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
         console.log( "dept",response.data)
         const dept=response.data
         disptach(setDept(dept))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startPostDept=(formdata)=>{
    return(dispatch)=>{
        axios.post('http://dct-tm.herokuapp.com/api/departments',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const dept=response.data
            console.log( "add dept",dept)
            dispatch(setDept(dept))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startDeleteDept=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-tm.herokuapp.com/api/departments/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const data=response.data
            console.log("delete",data)
            dispatch(deleteDept(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}