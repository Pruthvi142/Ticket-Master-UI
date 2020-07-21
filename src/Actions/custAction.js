import axios from "axios"
export const getCust=(custInfo)=>{
    // console.log("getdata",custInfo)
    
     return{
         type:'GET_CUST',payload:custInfo
     }
 } 
export const setCust=(custInfo)=>{
   // console.log("getdata",custInfo)
   
    return{
        type:'SET_CUST',payload:custInfo
    }
} 
export const deleteCust=(custInfo)=>{
    console.log("delete customer",custInfo)
   
    return{
        type:'DELETE',payload:custInfo
    }
} 

export const EditCust=(custInfo)=>{
    console.log("editcustomer",custInfo)
   
    return{
        type:'EDIT',payload:custInfo
    }
} 


export const startGetCustInfo=()=>{
    return(dispatch)=>{
        axios.get('https://dct-tm.herokuapp.com/api/customers',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const users=response.data
            // console.log("cust",users)
            dispatch(getCust(users))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  
}
// allow to logged user to add a new cust
export const startAddCust=(formdata)=>{
    return(dispatch)=>{
        axios.post('https://dct-tm.herokuapp.com/api/customers',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
         .then((response)=>{
             const cust=response.data
            // console.log( "add cust",cust)
             dispatch(setCust(cust))
         })
         .catch((err)=>{
             console.log(err)
         })
    }
}
// allow to logged user to update the cust
export const startUpdateCust=(id,formdata)=>{
    return(dispatch)=>{
        axios.put(`https://dct-tm.herokuapp.com/api/customers/${id}`,formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
          .then((response)=>{
              console.log(response.data)
          })
    }
}


// allow to logged user to delete the cust
export const startDeleteCust=(id)=>{
    
    return(dispatch)=>{
        axios.delete(`https://dct-tm.herokuapp.com/api/customers/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const cust=response.data
           // console.log( "delete data",cust)
            dispatch(deleteCust(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startEditCust=(id,formdata)=>{
    console.log("editaction",formdata,id)
    
    return(dispatch)=>{
        axios.put(`https://dct-tm.herokuapp.com/api/customers/${id}`,formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
                
            }
            else{
                console.log("Edit res",response.data)
                const cust=response.data
                dispatch(EditCust(id,cust))
            }   
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}