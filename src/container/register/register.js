import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user-redux'
import {Redirect} from 'react-router-dom'
import '../../index.css'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatedPwd: '',
            msg:'',
            type: 'employee'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }
    
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.handleChange('username', v)}>Username:</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('password', v)} type='password'>Password:</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('repeatedPwd', v)} type='password'>Confirm password:</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type==='employee'}
                        onChange={() => this.handleChange('type', 'employee')}>Employee</RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type==='employer'}
                        onChange={() => this.handleChange('type', 'employer')}>Employer</RadioItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleRegister}>Register</Button>
                </List>

                
            </div>
        )
    }
}

export default Register