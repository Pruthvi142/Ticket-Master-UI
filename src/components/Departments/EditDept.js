import React, { Component } from 'react';
import {connect} from 'react-redux'
import {startEditDept} from '../../Actions/deptAction'

class EditDept extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:props.department && props.department.name,
         
        
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
          
        }
       
       this.props.dispatch(startEditDept(this.props.department._id,formData))
       this.props.history.push("/department")
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

<label>Department:</label> 
<input type="text"  name="name" value={this.state.name} onChange={this.handleChange} ></input><br/>


<input type="submit" class="btn"/>
</form>
                        </div>
            </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
   
    return{
        department:state.departments.find(ele=>ele._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditDept);