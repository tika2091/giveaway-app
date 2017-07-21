import React from 'react';
import { hashHistory } from '../../config/routes';
import Validation from 'react-validation';
import validator from 'validator';
import validation from './validation';
import  {Component, PropTypes} from 'react';
import firebase from '../../config/firebase.js';

class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.SignUp = this.SignUp.bind(this)
  }
  SignUp() {
      //let NameInputValue = this.refs.Name.value;
      let EmailInputValue = this.refs.email.value;
      let PasswordInputValue = this.refs.password.value;
      console.log(EmailInputValue,PasswordInputValue);

      firebase.auth().createUserWithEmailAndPassword (EmailInputValue, PasswordInputValue)
          .then((user) => {
              let myObject = {
                  email: EmailInputValue
              }
              firebase.database.ref("userAuthenticaion/" + user.uid).set(myObject).then(() => {
                  console.log("user Created");

              })
          })
          .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
          });

  }
  render() {
      return (
          <div>
              <form >
                <div>
                  <h1>Please Create Your Account</h1>
                </div>
                <div>
                  <label>Email</label><input type="text" ref="email" />
                </div>
              <div>
                  <label>Password</label><input type="password" ref="password" />
                </div>
                <div>
                  <button type="button" onClick={this.SignUp}>Sign Up</button>
                </div>

              </form>
          </div>
      );
  }
}
export default SignUp;
