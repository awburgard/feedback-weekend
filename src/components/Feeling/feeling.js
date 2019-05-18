import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Feeling extends Component{
    constructor(props){
        super(props)
        this.state = {
            feeling : ''
        }
    }

    changeFeeling = (event) => {
        const inputValue = event.target.value;
        this.setState ({
            feeling: inputValue,
        });
    }

    addFeeling = (event) => {
        console.log(`I feel like a ${this.state.feeling}`)
    }

    render(){
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <input
                type="number"
                placeholder="Feeling"
                onChange={this.changeFeeling}
                />
                <button onClick={this.addFeeling}>Next</button>
            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(Feeling);