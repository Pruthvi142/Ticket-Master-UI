import React, { Component } from 'react';
import{connect} from 'react-redux'
import {startGetEmp,startPostEmp,startDeleteEmp} from '../../Actions/empAction'


class Employee extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            email:"",
            mobile:"",
            department:"",
            show:false
        }
    }
    componentDidMount() {
        if(this.props.Employees.length==0)
        {
            this.props.dispatch(startGetEmp())
        }
        
    }
    ShowForm=()=>{
        this.setState({
            show:true
        })
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteEmp(id))
        }
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
        this.setState({
            show:false
        })

    }
    render() {
        return (
            <div>
                {
                    this.state.show? (<div>
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
                    </div>):(<div>
                        <table>
                        <thead>
                  <tr>
                      <th>Num</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Department</th>
                      <th>Show </th>
                      <th>Delete</th>
                  </tr>
            </thead>
                    <tbody>
                        {
                            this.props.Employees.map((ele,i)=>{
                                 return(
                                     <tr>
                                         <td>{i+1}</td>
                                 <td>{ele.name}</td>
                                 <td>{ele.email}</td>
                                 <td>{ele.mobile}</td>
                                 <td>{this.props.Departments.map((el)=>{
                                     return  el._id==ele.department &&el.name
                                 })}</td>
                                 <td>{<button className="button1">Show</button>}</td>
                                 <td>{<button className="btn2" onClick={()=>{this.handleDelete(ele._id)}}>Delete</button>}</td>
                                     </tr>
                                 )
                            })
                        }
                    </tbody>

                        </table>
                    </div>)
                }
                {
                  this.state.show?"":<button  class="btn"onClick={()=>{this.ShowForm()}}>ADD</button>
                }
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        Departments:state.departments,
        Employees:state.Employees
    }
}

export default  connect(mapStateToProps)(Employee);