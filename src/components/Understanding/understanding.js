import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import Review from '../Review/review'

class Understanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            understanding: ''
        }
    }

    changeUnderstanding = (event) => {
        const inputValue = event.target.value;
        this.setState({
            understanding: inputValue,
        });
    }

    addUnderstandingToRedux = (event) => {
        this.props.dispatch({
            type: 'UNDERSTANDING_REDUX',
            payload: this.state.understanding,
        })
        this.props.history.push('/supported');
    }

    goBack = (event) => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2 className="title">How Well Did You Understand Today's Material?</h2>
                <div className="field">
                    <div className="control">
                        <input className="input is-info is-rounded"
                            type="number"
                            placeholder="Understanding"
                            onChange={this.changeUnderstanding}
                        />
                        <button className="button is-rounded is-info" onClick={this.goBack}>Back</button>
                        <button className="button is-rounded is-info" onClick={this.addUnderstandingToRedux}>Next</button>
                    </div>
                </div>
                <Review/>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);
