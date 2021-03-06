import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

class Payment extends React.Component {
  // onToken = (token) => {
  //   fetch('/save-stripe-token', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }

  render() {
    // debugger;
    // console.log('[Payment] this.props', this.props);
    return (
      <StripeCheckout
        name="This is a test."
        description="$5 for 5 emails"
        amount={500}
        // token={this.onToken}
        token={token => this.props.handleToken(token)}
        stripeKey="pk_test_Y6LfmvViO0VFb2iZjNTQC46T"
      >
          Add Credits
      </StripeCheckout>

    )
  }
}


export default connect(null, actions)(Payment)
