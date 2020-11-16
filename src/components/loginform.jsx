import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { login, getCurrentUser } from './../services/authServices';
import { Redirect } from 'react-router-dom';

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {}
    };
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };
        
    doSubmit= async ()=>{
        try{
            const {state} = this.props.location;
            const {data} = this.state;
            await login(data.username, data.password);
            window.location = state? state.from.pathname: '/vidly';
        }catch(ex)
        {
            console.log(ex);
            if(ex.response&&ex.response.status===400) {
                const {errors} = this.state;
                errors.username = ex.response.data;
                this.setState({errors});
            }
        }
    }
    render(){
        if(getCurrentUser()) return <Redirect to ='/vidly' />
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit} style = {this.styles}>
                    <h1>Login</h1>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Submit')}
                <div class="alert alert-light mt-3" style = {{padding: 0}} role="alert">
                    <li style = {{listStyleType: 'none'}}>admin@jerryliang.co</li>
                    <li style = {{listStyleType: 'none'}}>admin</li>
                </div>
                </form>
            </div>
         );
    }
    
}
 
export default LoginForm;