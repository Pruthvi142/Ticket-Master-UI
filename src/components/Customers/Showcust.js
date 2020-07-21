import React, { Component } from 'react';
import {connect} from 'react-redux'
 
function Showcust(props) {
  console.log("custtick",props.tickets)
  console.log("cust",props.customer)

// this method respossible for Redirect to Edit page 
     const showForm=(id)=>{
       props.history.push(`/EditCust/${id}`)
     }
       return (
            <div>
             <h1 className="uppercase"> { props.customer?.name} --{props.customer?.email}</h1> <br/>
             <h1 className="uppercase"></h1>
             
             <button   class="btn"onClick={()=>showForm(props.customer?._id)}> Edit</button> 
           </div>
    
            );

}
// this method to selecting customer data from store 
const mapStateToProps=(state,props)=>{
    return{
// to Find the particular customer based on Id  
      customer:state.customers.find(ele=>ele._id==props.match.params.id),
       tickets:state.Tickets.find(ele=>ele._id==props.match.params.id) 
    }
}

export default connect(mapStateToProps) (Showcust);