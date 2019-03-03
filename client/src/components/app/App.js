import React, { Component } from 'react';
import Form from '../layouts/Form';
import UserEvent from '../resources/UserEvent';

class App extends Component {
  render() {
    return (
      <div className="L_R">
        {this.props.fakeAuth('public')}
        <Form title="Login" handleEvent={UserEvent.FormLogin.bind(this)} path={{ uri: "/register", text: "Create an account" }}></Form>
      </div>
    );
  }
}

export default App;
