import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Pagination from 'semantic-ui-react/dist/commonjs/addons/Pagination';

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
                  <tr key={survey._id}>
                    <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                    <td>{survey.title}</td>
                    <td>{survey.body}</td>
                    <td>{survey.recipients.length}</td>
                    <td>Delivered</td>
                    <td>open</td>
                    <td>Unique Open</td>
                    <td>Click</td>
                    <td>{survey.yes} : {survey.no}</td>
                  </tr>
            )
          })
      }
  }

  render() {

    const {count, chosenPage} = this.props.surveys
    // console.log('[render surveys]', this.props.surveys, chosenPage);

    return (
      <>
        <div className="overview">
          <h1 className="overview__heading">
            Dashboard
          </h1>
        </div>
        <div className="detail">
          <div className="description">
            <div className="campaign__list">
               <table>
                 <tbody>
                   <tr>
                     <th>Date</th>
                     <th>Campaign</th>
                     <th>Sent</th>
                     <th>Delivered</th>
                     <th>Open</th>
                     <th>Unique Open</th>
                     <th>Click</th>
                     <th>Unique Click</th>
                     <th>sth</th>
                   </tr>
                   {this.renderSurveys()}
                   </tbody>
                 </table>
             </div>

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
          </div>
        </div>
      </>
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
