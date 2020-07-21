import React from 'react'
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'
import{connect} from 'react-redux'
import './nav.css'
//   users
import home from './components/static/home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {startLogOutUser} from './Actions/userAction'
// customers
import showCust from './components/Customers/Showcust'
import TableCust from './components/Customers/TableCust'
import AddCust from './components/Customers/AddCust'
import EditCust from './components/Customers/EditCust'
// Departments
import TableDep from './components/Departments/TableDep'
import AddDep from './components/Departments/AddDep'
import ShowDep from './components/Departments/ShowDep'
import EditDept from './components/Departments/EditDept'
// Employees
import EmpTable from './components/Employees/EmpTable'
import AddEmp from './components/Employees/AddEmp'
import EditEmp from './components/Employees/EditEmp'
import ShowEmp from './components/Employees/ShowEmp'
// Tickets
import Ticket from './components/Tickets/TableTicket'
import AddTicket from './components/Tickets/AddTicket'
import ShowTicket from './components/Tickets/ShowTicket'
import EditTicket from './components/Tickets/EditTicket'
function App(props)
{
    const handleLogOut=()=>{
        props.dispatch(startLogOutUser())

    }
    console.log( "login",props.user)
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
            <Link to="/users/login">Log in</Link>
           <Link to="/users/register">Register</Link>
                       </div>
                   )
               }
         
      
           
               </header>
          
                    {/* users */}
           <Route path="/" component={home} exact={true}/>
           <Route path="/users/login"component={Login} />
           <Route path="/users/register" component={Register}/>
                     {/* Customers */}
           <Route path="/customer" component={TableCust}/>
           <Route path="/addcust" component={AddCust}/>
           <Route path="/show/:id" component={showCust}/>
           <Route path="/EditCust/:id" component={EditCust}/>
                    {/* Departments */}
           <Route path ="/department" component={TableDep}/>
           <Route path="/addDept"      component={AddDep}/>
           <Route path="/showDept/:id" component={ShowDep}/>
           <Route path="/EditDept/:id" component={EditDept}/>   
                    {/* Employees */}
           <Route path="/employee" component={EmpTable}/>
           <Route path="/addemp" component={AddEmp}/>
           <Route path="/showemp/:id" component={ShowEmp}/>
           <Route path ="/editemp/:id" component={EditEmp}/>
                    {/* Tickets */}
           <Route path ="/ticket" component={Ticket}/>
           <Route path="/addticket" component={AddTicket}/>
           <Route path="/showticket/:id" component={ShowTicket}/>
           <Route path="/editticket/:id" component={EditTicket}/>

          

           
        
           
           

          
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