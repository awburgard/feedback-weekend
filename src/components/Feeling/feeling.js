import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Feeling extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>Hello</div>
        )
    }

}

export default connect(mapReduxStateToProps)(Feeling);