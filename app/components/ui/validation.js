import React from 'react';
import {Component} from 'react';
import Validation from 'react-validation';
import validator from 'validator';
//Merge a rule by using Object.assign
Object.assign(Validation.rules, {
  required: {
    // function to validate value
    rule: value => {
      return value.toString().trim();
    },
    //function to return hint
    hint: value => {
      return <span className='form-error is-visible'>Required</span>

    }
  },
  email: {
    rule: value => {
      return <span className='form-error is-visible'>{value}
        isnt an Email.</span>

    }
  },
  password: {
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed = password && passwordConfirm && password.isUsed && passwordConfirm.isUsed;
      const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
      if (!isBothUsed || !isBothChanged) {
        return true;
      }
      return password.value.value === passwordConfirm.value;
    },
    hint: () => <span className="form-error is-visible">
        Passwords should be min six character.</span>
  },

  render() {
    return <Validation.components.Form>
      <h3>Registration</h3>
      <div>
        <label>
          Email*
          <Validation.components.Input value='email@email.com' name='email' validations={['required', 'email']}/>
        </label>
      </div>
      <div>
        <label>
          Password*
          <Validation.components.Input type='password' value='' name='password' validations={['required']}/>
        </label>
      </div>
      <div>
        <Validation.components.Button>Submit</Validation.components.Button>
      </div>
    </Validation.components.Form>
  }
});
