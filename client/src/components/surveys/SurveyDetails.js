import React from 'react';

const SurveyDetails = ({survey, onCancel }) => {
  console.log('[details]', survey);
  return (
    <div>
      <button onClick={onCancel}>Working on this Back to List</button>
      <div className="details">
        <div className="details_msg">{survey.title}</div>
        <div className="details_stat">states</div>
      </div>
    </div>
  );
}

export default SurveyDetails;
