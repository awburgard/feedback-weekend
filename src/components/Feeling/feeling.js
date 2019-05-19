import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import Review from '../Review/review'

class Feeling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeling: ''
        }
    }

    changeFeeling = (event) => {
        const inputValue = event.target.value;
        this.setState({
            feeling: inputValue,
        });
    }

    addFeelingToRedux = (event) => {
        this.props.dispatch({
            type: 'FEELINGS_REDUX',
            payload: this.state.feeling,
        })
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input
                    type="number"
                    placeholder="Feeling"
                    onChange={this.changeFeeling}
                />
                <button onClick={this.addFeelingToRedux}>Next</button>
                <Review />
            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(Feeling);