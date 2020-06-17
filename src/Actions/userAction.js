import axios from 'axios' 
// set the data in store 
export const setUser=(users)=>{
   // console.log("logout",users)
    return {type:'SET_USER',payload:users}
}
// user log in  
export const startLoginUser=(formData,redirect)=>{
    console.log("login action",formData)
    return(dispatch)=>{
        axios.post('http://dct-tm.herokuapp.com/api/users/login',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error'))
            {
                alert(response.data.error)
            }
            else
            {
                alert("login sucessfull")
                console.log(response.data.token)
                localStorage.setItem("authToken",response.data.token)
            axios.get('http://dct-tm.herokuapp.com/api/users/account',{headers:{'x-auth':localStorage.getItem('authToken')}})
               .then((response)=>{
                 const users=response.data
             
                dispatch(setUser(users))
             }) 
        .catch((err)=>{
            console.log(err)
        })

                 redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
// to get  users account info nd set to store 
export const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('http://dct-tm.herokuapp.com/api/users/account',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            const users=response.data
            // console.log( "login",users)
            dispatch(setUser(users))
        }) 
        .catch((err)=>{
            console.log(err)
        })
    }
}
// Allow to  user registration 
export const startRegisterUser=(FormData,redirect)=>{
    return(dispatch)=>{
        axios.post('http://dct-tm.herokuapp.com/api/users/register',FormData)
     .then((response)=>{
         console.log(response.data)
         if(response.data.hasOwnProperty('errors'))
         {
             alert(response.data.message)
         }
         else
         {
             alert("succesfully registered")
             redirect()
         }

     })
     .catch((err)=>{
         console.log(err)
     })
    }
}
//Allow a  user to logout 
export const startLogOutUser=()=>{
    return(dispatch)=>{
        axios.delete('http://dct-tm.herokuapp.com/api/users/logout',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then((response)=>{
            if(response.data.notice)
            {
                // console.log(response.data.notice)
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href="/"
            }
        })

    }

}