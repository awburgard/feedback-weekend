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
                <p>I felt like a {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>I understood the material {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>I felt this supported {this.props.reduxState.feedbackReducer.support}</p>
                <p>{this.props.reduxState.feedbackReducer.comments}</p>
                <button onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);
