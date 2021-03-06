import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import swal from 'sweetalert';
import { deleteFeedback } from '../../Modules/services/feedback.service';
import moment from 'moment';

class Admin extends Component {
    goHome = (event) => {
        this.props.history.push('/')
    }

    removeItem = (event) => {
        const dataId = event.target.dataset.id
        const dbId = this.props.reduxState.finalReducer[dataId].id
        swal({
            Title: 'Are you sure?',
            text: 'This will delete your item',
            icon: 'warning',
            buttons: ["Oh noez!", "Aww yiss!"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteFeedback(dbId)
                        .then((response) => {
                            this.props.dispatch({
                                type: 'REMOVE_FEEDBACK',
                                payload: dataId,
                            })
                        })
                    swal('Poof! Your item has been remove!', {
                        icon: 'success',
                    });
                } else {
                    swal('Your item is safe!', {
                        icon: 'info',
                    });
                }
            })
    }
    render() {
        const feedbackArray = this.props.reduxState.finalReducer.map((feedback, index) => {
            return (
                <div key={index} className="box">
                    <div className="content">
                        <p>Date: {moment(feedback.date).format("MMMM Do YYYY")}</p>
                        <p>Feeling: {feedback.feeling}</p>
                        <p>Understanding: {feedback.understanding}</p>
                        <p>Support: {feedback.support}</p>
                        <p>Comments: {feedback.comments}</p>
                        <button className="button is-rounded is-danger" data-id={index} onClick={this.removeItem}>Delete</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h2 className="title is-4">Past Feedback</h2>
                {feedbackArray}
                <button className="button is-info is-rounded" onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Admin);