import React, { Component } from 'react';
import Form from '../layouts/Form';
import UserEvent from '../resources/UserEvent';

class Register extends Component {
  render() {
    return (
      <div className="L_R">
        {this.props.fakeAuth('public')}
        <Form title="Register" handleEvent={UserEvent.FormRegister.bind(this)} path={{ uri: "/", text: "Go to login" }}></Form>
      </div>
    );
  }
}

export default Register;
