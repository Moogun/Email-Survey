// import _ from 'lodash'
import _map from 'lodash/map';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
   const reviewFields = _map(formFields, ({ name, label }) => {
     return (
          <div className="form__group" key={name}>
            <label htmlFor="name" className="form__label">{label}</label>
            <span>{formValues[name]}</span>
          </div>
     );
   });

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
               <div action="" className="form" >
                   {reviewFields}
                 <div className="form__group__button">
                   <button className="form__goback" onClick={onCancel}>Back</button>
                   <button className="form__send" onClick={() => submitSurvey(formValues, history)}>Send</button>
                 </div>
               </div>
            </div>
        </div>
      </div>
   </>
   );
 };

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values}
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
