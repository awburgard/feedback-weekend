import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import { addFeedback } from '../../Modules/services/feedback.service'

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
        }
    }

    addReviewToDatabase = (event) => {
        console.log(this.props.reduxState.feedbackReducer)
        addFeedback(this.props.reduxState.feedbackReducer)
            .then((response) => {
                this.props.history.push('/');
            })
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <button onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);
