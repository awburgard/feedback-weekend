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
        this.setState ({
            supported: inputValue,
        });
    }

    render() {
        return (
            <input
            type="number"
            placeholder="Supported"
            onChange={this.changeSupport}
            />
        )
    }
}

export default connect(mapReduxStateToProps)(Supported);
