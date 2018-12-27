import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Pagination from 'semantic-ui-react/dist/commonjs/addons/Pagination';
import SurveyDetails from './SurveyDetails';

class SurveyList extends Component {
  constructor() {
    super();
    this.state = {
      detailsOpen: false,
      survey: null
    };
  }


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
  handleClickSurvey = (survey) => {
    console.log('handle click survey', survey);
    this.setState((prevState) => {
      return {detailsOpen : !prevState.detailsOpen, survey: survey}
    })
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
                <tr key={survey._id} onClick={() => this.handleClickSurvey(survey)}>
                  <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                  <td>{survey.title}</td>
                  <td>{survey.recipients.length}</td>
                  <td>##</td>
                  <td>##</td>
                  {/* <td>{survey.yes} : {survey.no}</td> */}
                </tr>
            )
          })
      }
  }

  render() {

    const {count, chosenPage} = this.props.surveys

    return (
      <>
        <div className="overview">
          <h1 className="overview__heading">
            Dashboard
          </h1>
        </div>
        <div className="detail">
          <div className="description">
            {this.state.detailsOpen
              ? <SurveyDetails survey={this.state.survey} onCancel={() => this.handleClickSurvey(null)}/>
              : <>
              <div className="campaign__list">
                 <table>
                   <tbody>
                     <tr>
                       <th>Date</th>
                       <th>Campaign</th>
                       <th>Sent</th>
                       <th>Open</th>
                       <th>Click</th>
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
              </>
            }
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
