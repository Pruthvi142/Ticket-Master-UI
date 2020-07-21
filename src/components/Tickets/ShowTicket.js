import React, { Component } from 'react';
import {connect} from 'react-redux'

function ShowTickets(props){
  
   
 // this method respossible for display the form 
  const showForm=(id)=> {
      
    props.history.push(`/editticket/${id}`)
  }
    
  console.log("show cust",props.customers)
        return (
         
            <div>
                
             <h1 className="uppercase" > Name-{props.customers.map((el)=>{
                   return  el._id==props.tickets.customer &&el.name
             })}</h1>
             <h1 className="uppercase">Message-{props.tickets?.message}</h1>
            <button   class="btn"onClick={()=>showForm(props.tickets._id)}> Edit</button> 
            </div> );
         
    
}
const mapStateToProps=(state,props)=>{
   
    return{
        customers:state.customers,
        tickets:state.Tickets.find(ele=>ele._id==props.match.params.id)
    }
}

export default connect(mapStateToProps) (ShowTickets);