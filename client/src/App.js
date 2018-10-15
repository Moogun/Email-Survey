import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Landing from './components/Landing'
import SurveyNew from './components/surveys/SurveyNew'
import SurveyList from './components/surveys/SurveyList'
import DraftList from './components/surveys/DraftList'
import './App.css'

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
            <Route exact path="/surveys" component={SurveyList} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route exact path="/draft" component={DraftList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
