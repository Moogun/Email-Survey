
import { Container } from 'semantic-ui-react'
import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
      <Container>
        <div className="text-box ">
          <div className="App-title">Email Tracker</div>
          <div>Now you can see if your emails are opend or not </div>
        </div>
      </Container>

    );
  }

}

export default Landing;
