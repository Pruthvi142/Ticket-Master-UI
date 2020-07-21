import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startGetCustInfo, startDeletCust} from '../../Actions/custAction'
import {startAddCust} from '../../Actions/custAction'
import {startDeleteCust}from '../../Actions/custAction'

import { Modal, Button } from 'bootstrap-4-react';
import '../auth/app.css'

class Customers extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
           
        }
    }
 
// To handle the input fileds  
handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
// to submit the formdata to server
 handlesubmit=(e)=>{
       e.preventDefault()
        const formData={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile
        }
 // dispatch to action genarator
      this.props.dispatch(startAddCust(formData))
 //  After form data submtting page Redirect to  customer  table page 
      this.props.history.push("/customer")
// clear the form after submitting 
     this.setState({
        name:'',
        email:'',
        mobile:''}) 
}
    render() {
        
      console.log( "cust",this.props)
        return (
            <div>
              { <h1 style={{color:"black"}}>Add Customers</h1> }
            <form onSubmit={this.handlesubmit} className="div1">
                <label>Name:</label> <br/>
                  <input type="text"   class="input1"name="name" value={this.state.name} onChange={this.handleChange} ></input><br/>
                <label>Email:</label><br/>
                  <input type="text"  class="input1"name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
               <label>Mobile</label><br/>
                  <input type="Number" name="mobile" value={this.state.mobile} onChange={this.handleChange}  maxLength="10"></input><br/>
               <input type="submit" className="btn"/>
            </form>
          </div>
             );
    }
}
//this method to selecting customer data from store 
const mapStateToProps=(state)=>{
return{
    customers:state.customers,
   
}

}
export default connect(mapStateToProps)(Customers);