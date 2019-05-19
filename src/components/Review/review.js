import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import { addFeedback } from '../../Modules/services/feedback.service'
import bulma from 'bulma';

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
        }
    }


    addReviewToDatabase = (event) => {
        addFeedback(this.props.reduxState.feedbackReducer)
            .then((response) => {
                this.props.history.push('/');
            })
    }

    render() {
        if (this.props.reduxState.feedbackReducer == null){
            return <button className="button is-disable" disabled>Finish</button>
        }
        return (
            <div>
                <h3>Review Your Feedback</h3>
                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                <button onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);
