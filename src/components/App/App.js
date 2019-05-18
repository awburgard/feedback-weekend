import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { connect } from 'react-redux';
import Feeling from '../Feeling/feeling'
import Understanding from '../Understanding/understanding'
import { getFeedback } from '../../Modules/services/feedback.service'

class App extends Component {

  componentDidMount() {
    getFeedback();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback Form</h1>
          </header>
          <br />
          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);