import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startUpdateCust} from '../../Actions/custAction'


class Showcust extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
            edit:false
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    showForm=()=>{
        this.setState({
            show:true
        })
    }
    handleSubmit=(e,props)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.dispatch(startUpdateCust(props.match.params.id,formData))
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
        console.log("one" ,this.props.customer)
        return (
            <div>
               {
                   this.state.show ? (
                   <div>
                         <form onSubmit={this.handlesubmit}>

<label>Name:</label> 
<input type="text"  name="name" value={this.state.name} onChange={this.handleChange} ></input><br/>
<label>Email:</label>
<input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
<label>Mobile</label>
<input type="Number" name="mobile" value={this.state.mobile} onChange={this.handleChange}  maxLength="10"></input><br/>

<input type="submit" class="btn"/>
</form>
                        </div>):""
               }
                <div>
            {
                this.state.show?"":<button   class="btn"onClick={()=>this.showForm()}> Edit</button> 
                }
               </div>
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
   
    return{
        customer:state.customers.find(ele=>ele._id==props.match.params.id)
    }
}

export default connect(mapStateToProps) (Showcust);