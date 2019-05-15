import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
    render(){
        return(
            <div>
                <Logo></Logo>
                <h2>Register</h2>
                <WingBlank>
                    <Button type='primary'>Login</Button>
                    <WhiteSpace />
                    <Button type='primary'>Register</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register