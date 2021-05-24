import './App.css';
import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { Component } from 'react';

class App extends Component {
  render() {
  return (
    <Form className="Login-form">
      <h1><span className="font-weight-bold">React</span>Chekpoint</h1>
      <h2 className="text-center"> Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"></Input>
      </FormGroup>
      <br/>
      <Button className="btn-lg btn-dark btn-block">
        Log In
        </Button>
        <div className="text-center pt-3"> Or continue with your social account </div>
        <GoogleLoginButton></GoogleLoginButton>
        <FacebookLoginButton></FacebookLoginButton>
        <div className="text-center">
          <a href="/sing-up">Sign Up </a>
           <span className="p-3"> </span> 
           <a href="/forget-password">Forget Password </a>
              </div>
        
        

    </Form>
  );
}
}



export default App;
