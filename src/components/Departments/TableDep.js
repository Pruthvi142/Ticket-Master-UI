import React, { Component } from 'react';
import {connect} from 'react-redux'
import { startGetDept, startPostDept ,startDeleteDept} from '../../Actions/deptAction';
import './table.css'


class Department extends Component {
   
    componentDidMount() {
        if(this.props.dept.length===0)
        {
            this.props.dispatch(startGetDept())  
        }
      
    }
   
    showForm=()=>{
        this.props.history.push("/addDept")
    }
  
    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteDept(id)) 
        }
    }
   
    showDept=(id)=>{
        this.props.history.push(`/showDept/${id}`)

    }
    render() {
       
        // console.log("depart",this.props.dept)
        
        return (
            <div>
             
         
        
           <h1> Departments- {this.props.dept.length}</h1>
                  <table className="table1">
                        {
                             this.props.dept.map((ele,i)=>{
                                return(
                                    <tr>
                                        <td>{i+1}</td>
                                <td>{ele.name}</td>
                               
                             
                                <td> <button class="button1" onClick={()=>{this.showDept(ele._id)}}> Show</button></td>
                                
                                <td>{<button  class="btn2" onClick={()=>{this.handleDelete(ele._id)}}>Delete</button>}</td>
                                    </tr>
                                )
                            })
                        }
                  </table>
       


        
            {
            <button className="btn1"  onClick={()=>this.showForm()}> ADD</button> 
                }
               
    

            </div>
           
        );
        
    }
}
const mapStateToProps=(state)=>{
    return{
        dept:state.departments
       
    }
}

export default connect(mapStateToProps)(Department);