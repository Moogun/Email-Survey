import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'

const Dashboard = () =>  <div> Dashboard </div>
const SurveyNew = () =>  <div> SurveyNew </div>
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
          {/* <Route path="/" component={Header}> </Route> */}

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
