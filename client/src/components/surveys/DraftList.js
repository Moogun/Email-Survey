import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import { Container, Button, Rail, Segment, Sticky } from 'semantic-ui-react'

class DraftList extends Component {
  // componentDidMount() {
  //   this.props.fetchSurveys()
  // }
  // renderSurveys() {
  //   return this.props.surveys.map(survey => {
  //     return (
  //         <Segment key={survey._id}>
  //           Title: {survey.title}
  //           Body: {survey.body}
  //           Yes or No {survey.yes} / {survey.no}
  //         </Segment>
  //     )
  //   })
  // }

  render() {

    return (
      <Container>
        DraftList
      </Container>
    );
  }

}

// const mapStateToProps = ({surveys}) => {
//   return { surveys }
// }

// export default connect(mapStateToProps, {fetchSurveys} )(DraftList) ;
export default DraftList
