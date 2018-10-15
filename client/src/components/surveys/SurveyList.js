import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import { Container, Button, Segment, Header, Pagination } from 'semantic-ui-react'

class SurveyList extends Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 50,
  }
  handlePaginationChange = (e, { activePage }) => {
      this.setState({ activePage })
      this.handleFetchSurveys()
  }
  handleFetchSurveys = () => {
      const { activePage } = this.state
      const pageSize = 5
      this.props.fetchSurveys(activePage, pageSize)
  }

  componentDidMount() {
      this.handleFetchSurveys()
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
    const { activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages } = this.state
    console.log('[surveys]', this.props.surveys, activePage);
    return (
      <Container>
        <Header as='h2'>Survey List</Header>
        {this.renderSurveys()}
        <Segment basic textAlign='center'>
            <Pagination
                activePage={activePage}
                boundaryRange={boundaryRange}
                onPageChange={this.handlePaginationChange}
                size='mini'
                siblingRange={siblingRange}
                totalPages={totalPages}
                secondary
             />
         </Segment>
      </Container>
    );
  }

}

const mapStateToProps = ({surveys}) => {
  return { surveys }
}

const mapDispatchToProps = dispatch => ({
  fetchSurveys: (skip, limit) => dispatch(fetchSurveys(skip, limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList) ;
