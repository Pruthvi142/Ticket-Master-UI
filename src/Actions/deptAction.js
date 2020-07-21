import axios from "axios"

export const setDept=(dept)=>{
    return {
        type:'ADD_DEPT',payload:dept
    }
}
export const getDept=(dept)=>{
    return {
        type:'GET_DEPT',payload:dept
    }
}
export const deleteDept=(data)=>{
    return {
        type:'DELETE',payload:data
    }

    }
    export const EditDept=(dept)=>{
        return {
            type:'EDIT_DEPT',payload:dept
        }
    }

export const startGetDept=()=>{
    return(disptach)=>{
        axios.get('https://dct-tm.herokuapp.com/api/departments',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
        // console.log( "dept",response.data)
         const dept=response.data
         disptach(getDept(dept))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startPostDept=(formdata)=>{
    return(dispatch)=>{
        axios.post('https://dct-tm.herokuapp.com/api/departments',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const dept=response.data
           // console.log( "add dept",dept)
            dispatch(setDept(dept))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startDeleteDept=(id)=>{
    return(dispatch)=>{
        axios.delete(`https://dct-tm.herokuapp.com/api/departments/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const data=response.data
           // console.log("delete",data)
            dispatch(deleteDept(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const startEditDept=(id,formdata)=>{
    console.log("editaction",formdata,id)
    
    return(dispatch)=>{
        axios.put(`https://dct-tm.herokuapp.com/api/departments/${id}`,formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
                
            }
            else{
                console.log("Edit res",response.data)
                const dept=response.data
                dispatch(EditDept(id,dept))
            }   
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}