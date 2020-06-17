import axios from "axios"
export const setCust=(custInfo)=>{
    console.log("getdata",custInfo)
   
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


export const startGetCustInfo=()=>{
    return(dispatch)=>{
        axios.get('http://dct-tm.herokuapp.com/api/customers',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const users=response.data
            // console.log("cust",users)
            dispatch(setCust(users))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  
}
// allow to logged user to add a new cust
export const startAddCust=(formdata)=>{
    return(dispatch)=>{
        axios.post('http://dct-tm.herokuapp.com/api/customers',formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
         .then((response)=>{
             const cust=response.data
             console.log( "add cust",cust)
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
        axios.put(`http://dct-tm.herokuapp.com/api/customers/${id}`,formdata,{headers:{'x-auth':localStorage.getItem('authToken')}})
          .then((response)=>{
              console.log(response.data)
          })
    }
}


// allow to logged user to delete the cust
export const startDeleteCust=(id)=>{
    
    return(dispatch)=>{
        axios.delete(`http://dct-tm.herokuapp.com/api/customers/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const cust=response.data
            console.log( "delete data",cust)
            dispatch(deleteCust(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}