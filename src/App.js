import React from 'react'
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'
import{connect} from 'react-redux'
import home from './components/static/home'
import Login from './components/auth/Login'
import customer from'./components/Customers/Customers'
import showCust from './components/Customers/Showcust'
import employee from './components/Employees/Employee'
import department from './components/Departments/Department'
import Register from './components/auth/Register'
import {startLogOutUser} from './Actions/userAction'
import './nav.css'
import Ticket from './components/Tickets/Ticket'
function App(props)
{
    const handleLogOut=()=>{
        props.dispatch(startLogOutUser())

    }
    return(
    
           <BrowserRouter>
           <div>
               <header  className="navbar">
              <h3>Ticket-Master</h3>
               {
                   Object.keys(props.user).length!==0 ?(
                       <div>
                            <Link to="/">Home</Link>
                            <Link to="/customer">Customers</Link>
                            <Link to ="/department">Departments</Link>
                            <Link to ="/employee">Employees</Link>
                            <Link to="/ticket">Tickets</Link>
                           
                           <Link to="#" onClick={handleLogOut} >Log out</Link>
                         
                       </div>
                   ):(
                       <div>
            <Link to="/">Home</Link>
            <Link to="users/login">Log in</Link>
           <Link to="/register">Register</Link>
                       </div>
                   )
               }
         
      
           
               </header>
          
           
           <Route path="/" component={home} exact={true}/>
           <Route path="/users/login"component={Login} />
           <Route path="/register" component={Register}/>
           <Route path="/customer" component={customer}/>
           <Route path="/show/:id" component={showCust}/>
           <Route path ="/department" component={department}/>
           {/* <Route path ="/showdept/:id" component={showdept}/> */}
           <Route path="/employee" component={employee}/>
         {/* //  <Route path="/showemp/:id"component={showEmp}/> */}
         <Route path ="/ticket" component={Ticket}/>
         {/* <Route path ="/showticket/:id" component={showTicket}/> */}

           
        
           
           
          
           </div>
           </BrowserRouter>
      
    )
    
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    
    }
}
export default connect(mapStateToProps)(App) 