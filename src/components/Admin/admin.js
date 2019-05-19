import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Admin extends Component {
    goHome = (event) => {
        this.props.history.push('/')
    }
    render() {
        const feedbackArray = this.props.reduxState.finalReducer.map((feedback, index)=>{
            return(
                <div key={index}>
                    <p>Feeling: {feedback.feeling}</p>
                    <p>Understanding: {feedback.understanding}</p>
                    <p>Support: {feedback.support}</p>
                    <p>Comments: {feedback.comments}</p>
                </div>
            )
        })

            return (
            <div>
                {feedbackArray}
                <button className="button is-info" onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Admin);