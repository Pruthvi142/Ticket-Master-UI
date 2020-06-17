import React, { Component } from 'react';
import{connect} from 'react-redux'

class Ticket extends Component {
    constructor(props)
    {
        super(props)
        this.state={
             code:'',
             customer:'',
             department:'',
             employee:'',
             message:'',
             priority:'',
             show:false 


        }
    }
    componentDidMount() {
       if( this.props.Tickets.length==0)
       {
           this.props.dispatch(startGetTicket())
       }
    }
    showForm=()=>{
       this.setState({
        show:true
       })
    }
    handleDelete=(id)=>{

    }
    handleSubmit=()=>{
        
    }
    render() {
        console.log("ticket cust",this.props.customers)
        console.log("ticket emp",this.props.employee)
        console.log("ticket dept",this.props.departments)
        return (
            <div>
                <h1>HI</h1>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        customers:state.customers,
        departments:state.departments,
        employee:state.mployees
    }
}

export default connect(mapStateToProps)(Ticket);