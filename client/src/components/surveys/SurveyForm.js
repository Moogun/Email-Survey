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
      <label className={label !== 'Email Body'
          ? "form__label"
          : "form__label form__label__Email-Body"}>{label}</label>
      <Field key={name} name={name} component={SurveyField} style={label !== 'Email Body'
          ? "form__input"
          : "form__textarea"}/>
    </div>
  })
}

  render() {
    // console.log(this.props.handleSubmit());
    return (
      <>
        <div className="overview">
          <h1 className="overview__heading">
            New Survey
          </h1>
        </div>
        <div className="detail">
          <div className="description">
            <div className="campaign">
                <form action="" className="form" onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                  {this.renderFields()}
                  <div className="form__group__button">
                    <Link to="/surveys" className="form__cancel">
                      <span>Cancel</span>
                    </Link>
                    <button className="form__review" type="submit">
                      <span>Review</span>
                    </button>
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
      errors[name] = 'Required';
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
