import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { connect } from 'react-redux';
import { getFeedback } from '../../Modules/services/feedback.service';
import Feeling from '../Feeling/feeling';
import Understanding from '../Understanding/understanding';
import Supported from '../Supported/supported';
import Comments from '../Comments/comments';
import Review from '../Review/review'
import Success from "../Success/success"
import bulma from '../../../node_modules/bulma/css/bulma.css';

class App extends Component {

  componentDidMount() {
    this.refreshFeedback();
  }

  refreshFeedback = () => {
    getFeedback()
      .then((response) => {
        this.props.dispatch({
          type: 'FEEDBACK_REDUX',
          payload: response.data,
        });
      });
  };


  render() {
    return (
      <Router>
        <div>
          <div className="hero is-small is-dark">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Feedback Form</h1>
                <p className="subtitle">Don't forget it!</p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <Route exact path='/' component={Feeling} />
            <Route path='/understanding' component={Understanding} />
            <Route path='/supported' component={Supported} />
            <Route path='/comments' component={Comments} />
            <Route path='/review' component={Review} />
            <Route path='/success' component={Success} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);