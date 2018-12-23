// import _ from 'lodash'
import _map from 'lodash/map';
import _each from 'lodash/each';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm  extends Component {
  renderFields() {
    return _map(formFields, ({label, name}) => {
       return <div key={name} className="form__group">
        <label for="name" className={label != 'Email Body' ? "form__label" : "form__label form__label__Email-Body"}>{label}</label>
        {label != 'Email Body'
          ? <input key={name} name={name} component={SurveyField} type="text" className="form__input" placeholder={name} id="name" required />
          : <textarea type="text" className="form__textarea" placeholder="Here is a great news..." id="name" required/>
        }
      </div>
    })
  }

  render() {
    return (
      <>
        <div class="overview">
          <h1 class="overview__heading">
            New Survey
          </h1>
        </div>
        <div class="detail">
          <div class="description">
            <div className="campaign">
                  <form action="" className="form" onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <div className="form__group__button">
                      <Link to="/surveys" className="form__cancel">
                        <span>Cancel</span>
                      </Link>
                      <Link to="/surveys" className="form__review">
                        <span>Review</span>
                      </Link>
                    </div>
                  </form>
              </div>

          </div>
        </div>

      </>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
