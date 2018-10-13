import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import { Container, Button, Rail, Segment, Sticky } from 'semantic-ui-react'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }
  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
          <Segment key={survey._id}>
            Title: {survey.title}
            Body: {survey.body}
            Yes or No {survey.yes} / {survey.no}
          </Segment>
      )
    })
  }

  render() {
    console.log('[surveys]', this.props.surveys);
    return (
      <Container>
        {this.renderSurveys()}
      </Container>
    );
  }

}

const mapStateToProps = ({surveys}) => {
  return { surveys }
}

export default connect(mapStateToProps, {fetchSurveys} )(SurveyList) ;
