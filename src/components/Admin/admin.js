import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Admin extends Component {
    goHome = (event) => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <p>Feeling: {this.props.reduxState.finalReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.finalReducer.understanding}</p>
                <p>Support: {this.props.reduxState.finalReducer.support}</p>
                <p>Comments: {this.props.reduxState.finalReducer.comments}</p>
                <button className="button is-info" onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Admin);