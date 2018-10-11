import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { Container, Button, Form } from 'semantic-ui-react'

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
   const reviewFields = _.map(formFields, ({ name, label }) => {
     return (
       <div key={name}>
         <label>{label}</label>
         <div>
           {formValues[name]}
         </div>
       </div>
     );
   });

   return (
     <Container>
       <h5>Please confirm your entries</h5>
       {reviewFields}
       <Button
         onClick={onCancel}
       >
         Back
       </Button>
       <Button
         onClick={() => submitSurvey(formValues, history)}
       >
         Send Survey
       </Button>
     </Container>
   );
 };

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values}
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
