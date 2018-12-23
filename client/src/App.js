import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import dashboard from './assets/img/dashboard.svg'
import newsurvey from './assets/img/newsurvey.svg'

import Header from './components/Header'
import Landing from './components/Landing'

import Loadable from 'react-loadable'
const loadableSurveyList = Loadable({
    loader: () => import('./components/surveys/SurveyList'),
    loading() {
        return  <div></div>
    }
})

const loadableSurveyNew = Loadable({
    loader: () => import('./components/surveys/SurveyNew'),
    loading() {
        return  <div></div>
    }
})

class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Header />
            <div className="content">
              <nav className="sidebar">
                <ul className="side-nav">
                  <li className="side-nav__item side-nav__item--active">
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
                {/* <Route exact path="/" component={Landing} /> */}
                <Route exact path="/surveys" component={loadableSurveyList} />
                <Route path="/surveys/new" component={loadableSurveyNew} />
                </main>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
