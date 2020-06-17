import React, { Component } from 'react';
import './app.css'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../Actions/userAction'


class Register extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
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
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        this.setState({
            username:'',
            email:'',
            password:''
        })

    }
    render() {
        return (
            <div   className="App-header">
           {
               <h1 style={{color:"black"}}>Register with Us</h1>
           }
             <form onSubmit={this.handlesubmit}>
                 <label>Username</label>
                 <input type="text" name="username" className= "input-field"value={this.state.username} onChange={this.handleChange} placeholder="Enter your name" /><br/>
                 <label>Email</label>
                 <input type="text" className= "input-field"name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter the Email"/><br/>
                 <label>Password</label>
                 <input type={this.state.hidden?'password':'text'} className= "input-field"  name="password" value={this.state.password} onChange={this.handleChange} maxLength="15"/><br/>
                 <input type="checkbox" onClick={this.toggleShow}/>show me<br/>
                 <input type="SUBMIT" className="btn"/>

             </form>
            </div>
        );
    }
}

export default connect()(Register);