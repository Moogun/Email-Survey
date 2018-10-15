import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { Container, Button, Form, Header } from 'semantic-ui-react'

class SurveyForm  extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) => {
       return <Form.Field key={name}>
         <label>{label}</label>
         <Field key={name} name={name} component={SurveyField} />
      </Form.Field>
    })
  }

  render() {
    return (
      <Container>
        <Header as='h2'>New Survey</Header>
        <Form action="" onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
          {this.renderFields()}
          <Button color='red' as={Link} to="/surveys">Cancel</Button>
          <Button primary floated='right' type="submit">Review</Button>
        </Form>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(formFields, ({ name }) => {
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
