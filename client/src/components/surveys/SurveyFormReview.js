// import _ from 'lodash'
import _map from 'lodash/map';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
   const reviewFields = _map(formFields, ({ name, label }) => {
     return (
          <Table.Row key={name}>
            <Table.Cell width={4}>{label}</Table.Cell>
            <Table.Cell>{formValues[name]}</Table.Cell>
          </Table.Row>
     );
   });

   return (
     <Container>
       <Header as='h2'>Please confirm your entries</Header>
        <Table padded>
            <Table.Body>
                {reviewFields}
            </Table.Body>
        </Table>
        <Button color='yellow' onClick={onCancel}> Back </Button>
        <Button primary floated='right' onClick={() => submitSurvey(formValues, history)} > Send Survey </Button>
     </Container>
   );
 };

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values}
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
