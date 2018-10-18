import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Landing from './components/Landing'
import SurveyNew from './components/surveys/SurveyNew'
import DraftList from './components/surveys/DraftList'
import './App.css'

import Loadable from 'react-loadable'
const loadableSurveyList = Loadable({
    loader: () => import('./components/surveys/SurveyList'),
    loading() {
        return  <div>loading</div>
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
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={loadableSurveyList} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route exact path="/draft" component={DraftList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
