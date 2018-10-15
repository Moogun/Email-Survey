import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import { Container, Button, Segment, Header, Pagination, Table } from 'semantic-ui-react'

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
      let date = new Date(survey.dateSent);
      return (
          <Table.Row key={survey._id}>
            <Table.Cell>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()} </Table.Cell>
            <Table.Cell>{survey.title} </Table.Cell>
            <Table.Cell>{survey.body} </Table.Cell>
            <Table.Cell>{survey.yes} </Table.Cell>
            <Table.Cell>{survey.no} </Table.Cell>
          </Table.Row>
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
        <Table padded selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>Sent</Table.HeaderCell>
              <Table.HeaderCell width={2}>Title</Table.HeaderCell>
              <Table.HeaderCell width={3}>Body</Table.HeaderCell>
              <Table.HeaderCell width={1}>Yes</Table.HeaderCell>
              <Table.HeaderCell width={1}>No</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.renderSurveys()}
          </Table.Body>
         </Table>

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
