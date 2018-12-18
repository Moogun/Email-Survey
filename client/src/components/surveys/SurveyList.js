import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Pagination from 'semantic-ui-react/dist/commonjs/addons/Pagination';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table';

class SurveyList extends Component {

  handlePaginationChange = (e, { activePage }) => {
      // activePage prop of Pagination component
      // console.log('activePage', activePage);
      this.handleFetchSurveys(activePage)
  }

  handleFetchSurveys = (chosenPage) => {
      // initial fetching chosenPage == 1
      const pageSize = 5
      this.props.fetchSurveys(chosenPage, pageSize)
  }

  componentDidMount() {
      // initial fetching for page 1
      this.handleFetchSurveys(1)
  }

  renderSurveys() {
      const surveys = this.props.surveys
      if (!!surveys['page'] && surveys['page'].length >0) {
          return surveys.page.map(survey => {
            let date = new Date(survey.dateSent);
            return (
                <Table.Row key={survey._id}>
                  <Table.Cell>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()} </Table.Cell>
                  <Table.Cell>{survey.title} </Table.Cell>
                  <Table.Cell>{survey.body} </Table.Cell>
                  <Table.Cell>{survey.recipients.length}</Table.Cell>
                  <Table.Cell>{survey.yes} </Table.Cell>
                  <Table.Cell>{survey.no} </Table.Cell>
                </Table.Row>
            )
          })
      }
  }

  render() {

    const {count, chosenPage} = this.props.surveys
    // console.log('[render surveys]', this.props.surveys, chosenPage);

    return (
      <Container>
        <div className="section">
          <h1 className="text-box">
            <span className="section-heading">Survey List</span>
          </h1>
        </div>
        <Table padded selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>Date Sent</Table.HeaderCell>
              <Table.HeaderCell width={2}>Title</Table.HeaderCell>
              <Table.HeaderCell width={3}>Body</Table.HeaderCell>
              <Table.HeaderCell width={1}>Num of Recipients</Table.HeaderCell>
              <Table.HeaderCell width={1}>Reply: Yes</Table.HeaderCell>
              <Table.HeaderCell width={1}>Reply: No</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.renderSurveys()}
          </Table.Body>
         </Table>

        <Segment basic textAlign='center'>
            <Pagination
                activePage={!!chosenPage ? chosenPage : 0}
                boundaryRange="1"
                onPageChange={this.handlePaginationChange}
                size='mini'
                siblingRange="1"
                totalPages={!!count ? parseInt(count / 5, 10) + 1 : 0}
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
