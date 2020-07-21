import React, { Component } from 'react';
import {connect} from 'react-redux'

function ShowDep (props){
  
   
 // this method respossible for display the form 
  const showForm=(id)=> {
      
    this.props.history.push(`/Editdept/${id}`)
  }
    
      
        return (
            <div>
             <h1 className="uppercase"> Name-{ props.department?.name}</h1>
            <button   class="btn"onClick={()=>showForm(this.props.department._id)}> Edit</button> 
            </div> );
    
}
const mapStateToProps=(state,props)=>{
   
    return{
        department:state.departments.find(ele=>ele._id==props.match.params.id)
    }
}

export default connect(mapStateToProps) (ShowDep);