import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Success extends Component {

    goHome = (event) =>{
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <h2 className="title is-2">Thanks for your thoughts!</h2>
                <button className="button is-info"onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Success);
