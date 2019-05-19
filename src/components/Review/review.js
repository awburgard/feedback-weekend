import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import { addFeedback } from '../../Modules/services/feedback.service'

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
            clear: {},
        }
    }


    addReviewToDatabase = (event) => {
        addFeedback(this.props.reduxState.feedbackReducer)
            .then((response) => {
                this.props.dispatch({
                    type: 'CLEAR_REDUX',
                    payload: this.state.clear
                })
                this.props.history.push('/');
            })
    }

    render() {
        let disableButton = true;

        if( this.props.reduxState.feedbackReducer.feeling &&
            this.props.reduxState.feedbackReducer.understanding &&
            this.props.reduxState.feedbackReducer.support &&
            this.props.reduxState.feedbackReducer.comments) {
            disableButton = false;
        }
        return (
            <div className="box">
                <div className="content">
                    <h3>Review Your Feedback</h3>
                    <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                    <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                    <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                    <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                </div>
                <button disabled={disableButton} className="button is-rounded is-info is-inverted" onClick={this.addReviewToDatabase}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);
