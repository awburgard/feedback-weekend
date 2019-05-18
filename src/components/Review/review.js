import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: [],
        }
    }

    addReviewToRedux = (event) => {
        this.props.dispatch({
            type: 'REVIEW_REDUX',
            payload: this.state.supported,
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <button onClick={this.addReviewToRedux}>Finish</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Review);
