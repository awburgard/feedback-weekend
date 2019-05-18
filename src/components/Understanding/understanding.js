import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Understanding extends Component{
    constructor(props){
        super(props)
        this.state = {
            understanding : ''
        }
    }

    changeUnderstanding = (event) => {
        const inputValue = event.target.value;
        this.setState ({
            understanding: inputValue,
        });
    }

    render() {
        return (
            <input
            type="number"
            placeholder="Supported"
            onChange={this.changeUnderstanding}
            />
        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);
