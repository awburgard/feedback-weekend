import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class Comments extends Component{
    constructor(props){
        super(props)
        this.state ={
            comment: '',
        }
    }

    render(){
        return(
            <input type="text" placeholder="Comments"
            />
        )
    }
}

export default connect(mapReduxStateToProps)(Comments);
