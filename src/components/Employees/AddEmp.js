import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startPostEmp} from '../../Actions/empAction'


class AddEmp extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            email:"",
            mobile:"",
            department:"",
    
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const FormData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        this.props.dispatch(startPostEmp(FormData))
        this.props.history.push("/employee")

        this.setState({
            name:'',
            email:'',
            mobile:'',
            department:''
        })
        

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
const mapStateToProps=(state)=>{
    return{
        Departments:state.departments,
       
    }
}

export default connect(mapStateToProps) (AddEmp);