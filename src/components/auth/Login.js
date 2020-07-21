import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startLoginUser} from '../../Actions/userAction'
import './app.css'

class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            hidden:true
        }
    }
    toggleShow=()=>{
       const{ hidden}=this.state
       this.setState({hidden:!this.state.hidden})
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit=(e)=>{
    e.preventDefault()
    const formData={
        email:this.state.email,
        password:this.state.password
    }
    const redirect=()=>{
        return this.props.history.push("/")
    }
    // console.log("loginData",formData)
    this.props.dispatch(startLoginUser(formData,redirect))
    this.setState({
        email:'',
        password:''
    })
    }
    render() {
        return (
           
                 
        
                <div  className="App-header"> 
           
                <form onSubmit={this.handlesubmit}>


<label>Email:</label> 
<input type="text"className= "input-field" name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
<label>Password:</label>
<input type={this.state.hidden? 'password':'text'} className= "input-field" name="password" value={this.state.password} onChange={this.handleChange} ></input><br/>
<input type="checkbox" onClick={this.toggleShow}></input>Show me<br/> 
<input type="submit" className="btn"/>

 
  </form>
     
         
              
            </div>
        );
    }
}

export default connect() (Login);