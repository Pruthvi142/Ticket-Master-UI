import React, { Component } from 'react';
import {connect} from 'react-redux'
import { startGetDept, startPostDept ,startDeleteDept} from '../../Actions/deptAction';
import './table.css'


class Department extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            show:false
        }
    }
    componentDidMount() {
        if(this.props.dept.length==0)
        {
            this.props.dispatch(startGetDept())  
        }
      
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    showForm=()=>{
        this.setState({
            show:true
        })
    }
    handleSubmit=(e)=>{ 
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.dispatch(startPostDept(formData))
        this.setState({
            show:false
        })
        this.setState({
            name:''
        })

    }
    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteDept(id)) 
        }
    }
   
    render() {
       
        console.log("depart",this.props.dept)
        
        return (
            <div>
                {
          this.state.show? (
             <div>
          <h1>Department</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Department</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <br/>
            <input type="submit" className="btn1"/>
        </form>
        </div>):(<div>
           <h1> Departments- {this.props.dept.length}</h1>
                  <table className="table1">
                        {
                             this.props.dept.map((ele,i)=>{
                                return(
                                    <tr>
                                        <td>{i+1}</td>
                                <td>{ele.name}</td>
                               
                             
                                <td> <button class="button1" onClick={()=>{this.showCust(ele._id)}}> Show</button></td>
                                
                                <td>{<button  class="btn2" onClick={()=>{this.handleDelete(ele._id)}}>Delete</button>}</td>
                                    </tr>
                                )
                            })
                        }
                  </table>
        </div>)
                }


                <div>
            {
                this.state.show?"":<button className="btn1"  onClick={()=>this.showForm()}> ADD</button> 
                }
               </div>
    

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