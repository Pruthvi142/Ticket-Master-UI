import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startPostDept } from '../../Actions/deptAction';

class AddDep extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            show:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   
    handleSubmit=(e)=>{ 
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.dispatch(startPostDept(formData))
        this.props.history.push("department")
        this.setState({
            show:false
        })
        this.setState({
            name:''
        })

    }
    render() {
        return (
            <div>
                 <h1>Department</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Department</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <br/>
            <input type="submit" className="btn1"/>
        </form>
            </div>
        );
    }
}


export default connect() (AddDep);