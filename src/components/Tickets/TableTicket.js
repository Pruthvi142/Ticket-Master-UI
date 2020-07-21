import React, { Component } from 'react';
import{connect} from 'react-redux'
import{startGetTicket,startPostTicket, startDeleteTicket} from '../../Actions/ticketsAction'
import { selectEmpName } from '../../selectors/empsele'


class Ticket extends Component {
    constructor(props)
    {
        super(props)
        this.state={
             code:'',
             customer:'',
             department:'',
             employee:[],
             message:'',
             priority  :'',
             show:false ,
             search:''


        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  
    componentDidMount() {
       if( this.props.tickets.length==0)
       {
           this.props.dispatch(startGetTicket())
       }
    }
  
    AddForm=()=>{
        this.props.history.push("/addticket")
     
    }
    ShowTicket=(id)=>{
        this.props.history.push(`/showticket/${id}`)
    }

    handleDelete=(id)=>{
     
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove)
        {console.log(id)
        
         this.props.dispatch(startDeleteTicket(id))
        }
    }
   
    render() {
        // console.log("ticket cust",this.props.customers)
       // console.log("ticket emp",this.props.employees)
        // console.log("ticket dept",this.props.departments)
        //console.log("tic",this.props.tickets)
        return (
            <div>
                                <input type="text"  class="topinput"value={this.state.search} onChange={this.handleChange} name="search" placeholder=" search by code" />
                {
        
                        <table>
                        <thead>
                  <tr>
                      <th>Code No</th>
                      <th>Customers</th>
                      <th>Departments</th>
                      <th>Employees</th>
                      <th>Messages</th>
                      <th>Priority </th>
                      <th>Actions</th>
                      <th>Remove</th>
                      <th>complete</th>
                      
                  </tr>
            </thead>
                    <tbody>
                        {

                         
                            this.props.tickets.filter(tick => tick.code.includes(this.state.search)).map((tic,i)=>{
                                const employeeNames = selectEmpName(this.props.employees, tic.employees.map(emp => emp.employee))
                               // const emp=tic.employee.find(em=>(em._id))
                                 return(
                                     <tr>
                                        
                                 <td>{tic.code}</td> 
                                 <td>{this.props.customers.map((el)=>{
                                     return  el._id==tic.customer &&el.name
                                 })}</td>
                                
                                 <td>{this.props.departments.map((el)=>{
                                     return  el._id==tic.department &&el.name
                                 })}</td>
                                 <td>{ employeeNames.join(',')}</td>
                                 <td>{tic.message}</td>
                                <td>{tic.priority}</td>
                                 <td>{<button className="button1" onClick={()=>{this.ShowTicket(tic._id)}}>Show</button>}</td>
                                 <td>{<button className="btn2" onClick={()=>{this.handleDelete(tic._id)}}>Delete</button>}</td>
                                <td>{<input type="checkbox"></input>}</td>
                                     </tr>
                                 )
                            })
                        }
                            
                    </tbody>

                        </table>
            
                }
                {
                  <button  class="btn"onClick={()=>{this.AddForm()}}>ADD</button>
                }
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        customers:state.customers,
        departments:state.departments,
        employees:state.Employees,
        tickets:state.Tickets
    }
}

export default connect(mapStateToProps)(Ticket);