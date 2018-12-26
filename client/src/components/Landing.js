import React, { Component } from 'react';
import logo from '../assets/img/logo.svg'
import envelope from '../assets/img/envelope.svg'
import mail from '../assets/img/mail.svg'
import plane from '../assets/img/plane.svg'
import moogun from '../assets/img/moogun.png'

class Landing extends Component {

  render() {
    return (
      <div className="index">
        <div className="landing">

            <div className="landing_box">
              <h1 className="landing_text">
                  <div className="landing_text-main">Email Marketing</div>
                  <div className="landing_text-sub">See Customer's Response</div>
              </h1>
            </div>

            <div className="landing_box">
              <img
                src={logo}
                alt="Email Survey" className="landing_img"/>
            </div>
        </div>


        <div className="section_feature">
            <div className="section_feature_box">
              <img
                src={envelope}
                alt="Email Survey" className="section_feature_img"/>
              <p>Write</p>
            </div>
            <div className="section_feature_box">
              <img
                src={plane}
                alt="Email Survey" className="section_feature_img"/>
              <p>Send</p>
            </div>
            <div className="section_feature_box">
              <img
                src={mail}
                alt="Email Survey" className="section_feature_img"/>
              <p>See Responses</p>
            </div>
        </div>

        <div className="section_news_letter">

        </div>

        <div className="section_action">
          <div className="action_avatar">
            <img
              src={moogun}
              alt="moogun" className="action_avt"/>
          </div>
          <div className="action_text-box">
              <p className="action_text-box-primary">Tools for marketer</p>
              <p className="action_text-box-secondary">Keep notifying how your prospect customers respond to your email</p>
          </div>
        </div>

        <div>
          footer
        </div>


      </div>
    );
  }

}

export default Landing;

// <Container>
//   <header className="header">
//     <div className="text-box">
//         <h1 className="heading-primary">
//           <span className="heading-primary-main">Email Surveys</span>
//           <span className="heading-primary-sub">Now you can see how your customers respond to your marketing emails</span>
//         </h1>
//     </div>
//   </header>
//
//     <div className="instruction">
//         <h1 className="instruction-title">How to add credits (for test purpose)</h1>
//         <ol className="instruction-steps">
//             <li>Click 'Add Credits'</li>
//             <li>Enter 4242 4242 4242 4242 for the card number</li>
//             <li>Enter arbitrary expiration date and CVC (eg. 11/20 , 111)</li>
//         </ol>
//     </div>
// </Container>
