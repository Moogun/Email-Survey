import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from './actions'

import dashboard from './assets/img/dashboard.svg'
import newsurvey from './assets/img/newsurvey.svg'

import Header from './components/Header/Header'
import Landing from './components/Landing'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Dimmer from 'semantic-ui-react/dist/commonjs/modules/Dimmer';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import Loadable from 'react-loadable'
const loadableSurveyList = Loadable({
  loader: () => import ('./components/surveys/SurveyList'),
  loading() {
    return <div></div>
  }
})

const loadableSurveyNew = Loadable({
  loader: () => import ('./components/surveys/SurveyNew'),
  loading() {
    return <div></div>
  }
})

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
          return( <div>
                <Segment basic style={{minHeight: "100vh"}}>
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                </Segment>
              </div>)
      case false :
          return <Landing />
      default :
          return <div className="content">
            <nav className="sidebar">
              <ul className="side-nav">
                {/* side-nav__item--active */}
                <li className="side-nav__item">
                  <Link to="/surveys" className="side-nav__link">
                    <img src={dashboard} alt="" className="side-nav__icon"/>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="side-nav__item">
                  <Link to="/surveys/new" className="side-nav__link">
                    <img src={newsurvey} alt="" className="side-nav__icon"/>
                    <span>New Survey</span>
                  </Link>

                </li>
              </ul>
              <div className="legal">
                &copy; 2018 by Email Marketing. All rights reserved.
              </div>
            </nav>
            <main className="hotel-view">
              <Route exact path="/surveys" component={loadableSurveyList}/>
              <Route path="/surveys/new" component={loadableSurveyNew}/>
            </main>
          </div>
    }
  }
  render() {
    console.log('[app]', this.props.auth);
    return (<div>
      <Router>
        <div className="container">
          <Header/>
          {this.renderContent()}
        </div>
      </Router>
    </div>);
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, actions)(App);
