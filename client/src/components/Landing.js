import React, { Component } from 'react';
import logo from '../assets/img/logo.svg'
import envelope from '../assets/img/envelope.svg'
import mail from '../assets/img/mail.svg'
import plane from '../assets/img/plane.svg'
import diagram from '../assets/img/diagram.svg'
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

        <div className="flow">
          <div className="flow_box">
            <ul className="flow_box-list">
              <li className="flow_box-item">A/B Test</li>
              <li className="flow_box-item">Track Efficiency</li>
              <li className="flow_box-item">Target Audience</li>
              <li className="flow_box-item">Boost Sales</li>
            </ul>
          </div>
          <div className="flow_box">
            <img
            src={diagram}
            alt="diagram" className="flow_box-img"/>
          </div>

        </div>

        <div className="action">
          <div className="action_avatar">
            <img
              src={moogun}
              alt="moogun" className="action_avt"/>
          </div>
          <div className="action_text-box">
              <div className="action_text-box-primary">Moogun</div>
              <div className="action_text-box-secondary">"Keep notifying how your prospect customers respond to your email"</div>
          </div>
        </div>

        <footer className="footer">
          <p className="footer_copyright"> Eamil Survey 2018 @Copyright </p>
        </footer>

      </div>
    );
  }

}

export default Landing;
