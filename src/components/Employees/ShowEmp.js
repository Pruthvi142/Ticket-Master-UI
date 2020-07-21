import React, { Component } from 'react';
import {connect} from 'react-redux'

function ShowEmp (props){
  
   
 // this method respossible for display the form 
  const showForm=(id)=> {
      
    props.history.push(`/editemp/${id}`)
  }
    
      
        return (
            <div>
             <h1  className="uppercase"> Name-{ props.Employees?.name}</h1>
            <button   class="btn"onClick={()=>showForm(props.Employees._id)}> Edit</button> 
            </div> );
    
}
const mapStateToProps=(state,props)=>{
   
    return{
        Employees:state.Employees.find(ele=>ele._id==props.match.params.id)
    }
}

export default connect(mapStateToProps) (ShowEmp);