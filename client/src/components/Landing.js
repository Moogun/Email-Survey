import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import React, { Component } from 'react';
import '../App.css'

class Landing extends Component {

  render() {
    return (
      <Container>
        <header className="header">
          <div className="text-box">
              <h1 className="heading-primary">
                <span className="heading-primary-main">Email Surveys</span>
                <span className="heading-primary-sub">Now you can see how your customers respond to your marketing emails</span>
              </h1>
          </div>
        </header>

          <div className="instruction">
              <h1 className="instruction-title">How to add credits (for test purpose)</h1>
              <ol className="instruction-steps">
                  <li>Click 'Add Credits'</li>
                  <li>Enter 4242 4242 4242 4242 for the card number</li>
                  <li>Enter arbitrary expiration date and CVC (eg. 11/20 , 111)</li>
              </ol>
          </div>
      </Container>

    );
  }

}

export default Landing;
