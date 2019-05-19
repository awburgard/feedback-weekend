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
                <h2 className="title tile">How are you feeling today?</h2>
                <div class="field">
                    <div class="control">
                        <input class="input is-info is-rounded"
                            type="number"
                            placeholder="Feeling"
                            onChange={this.changeFeeling}
                        />
                        <button className="button is-rounded is-info" onClick={this.addFeelingToRedux}>Next</button>
                    </div>
                </div>
                <Review />
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(Feeling);