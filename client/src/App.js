import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import SurveyNew from './components/surveys/SurveyNew'

const Landing = () => <div> Landing </div>

class App extends Component {

  componentDidMount(){
    console.log('[App did mount] 1 ', )
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}
//action creator is a fnc returns an obj

// const mapDispatchToProps = dispatch => {
//   // fetchUser: dispatch(actionCreator({}))
//   // fetchUser: dispatch(addTodo({type: '', text: '' }))
//   return {
//       fetchUser: () => {
//       return dispatch(fetchUser)
//     }
//   }
// }

export default connect(null, actions)(App);
