import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {login} from '../../redux/user-redux'
import {connect} from 'react-redux'
import '../../index.css'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            type:'employee'
        }   
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        const RadioItem = Radio.RadioItem
        const redirectTo = this.props.redirectTo
        const {pathname} = this.props.location
        return(
            <div>
                {pathname != redirectTo ? redirectTo? <Redirect to={redirectTo}></Redirect> : null : null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.handleChange('username', v)}>Username:</InputItem>
                        <InputItem onChange={v=>this.handleChange('password', v)} type='password'>Password:</InputItem>
                        <RadioItem checked={this.state.type==='employee'}
                            onChange={() => this.handleChange('type', 'employee')}>Employee</RadioItem>
                        <WhiteSpace />
                        <RadioItem checked={this.state.type==='employer'}
                            onChange={() => this.handleChange('type', 'employer')}>Employer</RadioItem>
                        <WhiteSpace />   
                    </List>
                    <WhiteSpace />  
                    <Button type='primary' onClick={this.handleLogin}>Login</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>Register</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login