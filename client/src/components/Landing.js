import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
      <Container>
        <div className="text-box">
          <div className="App-title">Email Surveys</div>
          <div className="App-title-sub">Now you can see how your customers respond to your email marketing </div>

          <div>How to add credits (for test purpose)
              <ol>
                  <li>Click 'Add Credits'</li>
                  <li>Enter 4242 4242 4242 4242 for the card number</li>
                  <li>Enter arbitrary expiration date and CVC (eg. 11/20 , 111)</li>
                  <li>5 credits will be added</li>
              </ol>
          </div>
        </div>
      </Container>

    );
  }

}

export default Landing;
