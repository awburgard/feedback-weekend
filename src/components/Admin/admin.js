import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Admin extends Component {
    goHome = (event) => {
        this.props.history.push('/')
    }
    render() {
        const feedbackArray = this.props.reduxState.finalReducer.map((feedback, index) => {
            return (
                <div key={index} className="box">
                    <div className="content">
                        <p>Feeling: {feedback.feeling}</p>
                        <p>Understanding: {feedback.understanding}</p>
                        <p>Support: {feedback.support}</p>
                        <p>Comments: {feedback.comments}</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h2 className="title is-4">Past Feedback</h2>
                {feedbackArray}
                <button className="button is-info" onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Admin);