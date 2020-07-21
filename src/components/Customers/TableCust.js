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
 componentDidMount() {
        
        if(this.props.customers.length==0)
        {
           this.props.dispatch(startGetCustInfo())
        }
 }
 // this method respossible for display the form 
    showForm=()=>{
      
        this.props.history.push("/addcust")
      }
 // To handle the input fileds  
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
 //this method Redirect the show page    
    showCust=(id)=>{
        console.log("show ",id)
        this.props.history.push(`/show/${id}`)
    }
 // Delete the Customers
    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteCust(id))
        }
    }
 // to submit the formdata to server
    handlesubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile
    }
   
    this.props.dispatch(startAddCust(formData))
     this.setState({
        name:'',
        email:'',
        mobile:''
    })
    this.props.history.push("/")
    }

    render() {
        
      console.log( "cust",this.props)
        return (
            <div>
                   { <h1 style={{color:"black"}}> Customers Details</h1>}
                <table>
                        <thead>
                          <tr>
                             <th>Num</th>
                             <th>Name</th>
                             <th>Email</th>
                             <th>Mobile</th>
                             <th>Show </th>
                             <th>Delete</th>
                           </tr>
                        </thead>
                     <tbody>
                       {
                              this.props.customers.map((ele,i)=>{
                               return(
                                     <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.mobile}</td>
                                        <td> <button  class ="button1"onClick={()=>{this.showCust(ele._id)}}> Show</button></td>
                                        <td><button  class="btn2"onClick={()=>{this.handleDelete(ele._id)}}>Delete</button></td>
                                    </tr> )
                                  })
                        }
                    </tbody>
                </table>
                <button className="btn1"  onClick={()=>this.showForm()}> ADD</button> 
             </div>
           );
      }
}
const mapStateToProps=(state)=>{
return{
    customers:state.customers,
   
}

}
export default connect(mapStateToProps)(Customers);