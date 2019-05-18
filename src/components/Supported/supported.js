import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Supported extends Component {
    constructor(props) {
        super(props)
        this.state = {
            supported: '',
        }
    }

    changeSupport = (event) => {
        const inputValue = event.target.value;
        this.setState({
            supported: inputValue,
        });
    }

    addSupportToRedux = (event) => {
        this.props.dispatch({
            type: 'SUPPORT_REDUX',
            payload: this.state.supported,
        })
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Supported"
                    onChange={this.changeSupport}
                />
                <button onClick={this.addSupportToRedux}>Next</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Supported);
