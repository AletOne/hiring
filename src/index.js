import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import reducers from './reducer'
import './config'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import AuthRoute from './component/authroute/authroute'
import EmployeeInfo from './container/info/employeeInfo'
import EmployerInfo from './container/info/employerInfo'
import Dashboard from './component/dashboard/dashboard'
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))



ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/employer/info' component={EmployerInfo}></Route>
                    <Route path='/employee/info' component={EmployeeInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Register' component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
                
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)