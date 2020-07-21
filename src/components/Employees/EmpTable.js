import React, { Component } from 'react';
import{connect} from 'react-redux'
import {startGetEmp,startPostEmp,startDeleteEmp} from '../../Actions/empAction'


class Employee extends Component {
   
    componentDidMount() {
        if(this.props.Employees.length===0)
        {
            this.props.dispatch(startGetEmp())
        }
        
    }
    ShowForm=()=>{
     this.props.history.push("/addemp")
    }
    showEmp=(id)=>{
        console.log("show ",id)
        this.props.history.push(`/showemp/${id}`)
    }
    
    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteEmp(id))
        }
    }
  
    render() {
        return (
            <div>
                {
                    
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
                                 <td>{<button className="button1" onClick={()=>{this.showEmp(ele._id)}}>Show</button>}</td>
                                 <td>{<button className="btn2" onClick={()=>{this.handleDelete(ele._id)}}>Delete</button>}</td>
                                     </tr>
                                 )
                            })
                        }
                    </tbody>

                        </table>
                    
                }
                {
                  <button  class="btn"onClick={()=>{this.ShowForm()}}>ADD</button>
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