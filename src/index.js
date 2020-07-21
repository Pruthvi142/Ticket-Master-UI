import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import{startGetUser} from './Actions/userAction'
import {startGetCustInfo}from './Actions/custAction'
import { startGetDept } from './Actions/deptAction'
import { startGetEmp } from './Actions/empAction'
import { startGetTicket } from './Actions/ticketsAction'

const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
//handle page reload
if(localStorage.getItem('authToken'))
{
    store.dispatch(startGetUser())
    store.dispatch(startGetCustInfo())
    store.dispatch(startGetDept())
    store.dispatch(startGetEmp())
    store.dispatch(startGetTicket())

}
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDom.render(jsx,document.getElementById('root'))