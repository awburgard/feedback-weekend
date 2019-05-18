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

    render(){
        return(
            <div>Hello</div>
        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);
