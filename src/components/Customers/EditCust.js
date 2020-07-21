import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startEditCust} from '../../Actions/custAction'

class EditCust extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:props.customer && props.customer.name,
            email:props.customer && props.customer.email,
            mobile:props.customer && props.customer.mobile,
        
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
            mobile:this.state.mobile
        }
       this.props.dispatch(startEditCust(this.props.customer._id,formData))
    //  After form data submtting page Redirect to Show page 
       this.props.history.push(`/show/${this.props.customer._id}`)
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
                   <div>
                         <form onSubmit={this.handleSubmit}>
                             <label>Name:</label> 
                                <input type="text"  name="name" value={this.state.name} onChange={this.handleChange} ></input><br/>
                            <label>Email:</label>
                                 <input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
                            <label>Mobile</label>
                                 <input type="Number" name="mobile" value={this.state.mobile} onChange={this.handleChange}  maxLength="10"></input><br/>
                                 <input type="submit" class="btn"/>
                         </form>
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

export default connect(mapStateToProps)(EditCust);