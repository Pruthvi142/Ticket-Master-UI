import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startEditEmp} from '../../Actions/empAction'

class EditCust extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:props.employees && props.employees.name,
            email:props.employees && props.employees.email,
            mobile:props.employees && props.employees.mobile,
            department:props.employees &&props.employees.department
        }
    }
    // this method take care of the changing value in input filed
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    //To  pass the Formdata to server 
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
       
       this.props.dispatch(startEditEmp(this.props.employees._id,formData))
       //  After form data submtting page Redirect to Show page 
       this.props.history.push(`/show/${this.props.employees._id}`)
        this.setState({
            show:false
        })
        this.state={
            name:'',
            email:'',
            mobile:''
        }
     
    }
    
    render() {
        return (
            <div>
                   <form onSubmit={this.handleSubmit} className="div1"> 
                              <label>Name:</label> <br/>
                            
             <input type="text"  class="input1"name="name" value={this.state.name} onChange={this.handleChange} ></input><br/>
             <label>Email:</label><br/>
            <input type="text"  class="input1"name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
           <label>Mobile</label><br/>
          <input type="Number" class="input1"name="mobile" value={this.state.mobile} onChange={this.handleChange}  maxLength="10"></input><br/>
          <label>Department</label><br/>
          <select value={this.state.department}name="department"onChange={this.handleChange}>
          <option value="">select</option>
                {
                   this.props.Departments.map((ele)=>{
                     return <option value={ele._id}>{ele.name}</option>
                   })
                }
                </select> 
                <input type="submit" className="btn"/>
                              </form>
            
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
   
    return{
        employees:state.Employees.find(ele=>ele._id==props.match.params.id),
        Departments:state.departments,
        
      
      
    }
}

export default connect(mapStateToProps)(EditCust);