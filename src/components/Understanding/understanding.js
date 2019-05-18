import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

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

    render() {
        return (
            <div>
                <h2>How Well Did You Understand Today's Material?</h2>
                <input
                    type="number"
                    placeholder="Understanding"
                    onChange={this.changeUnderstanding}
                />
                <button onClick={this.addUnderstandingToRedux}>Next</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);
