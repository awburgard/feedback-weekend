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

    changeCommment = (event) => {
        const inputValue = event.target.value;
        this.setState({
            comment: inputValue,
        });
    }

    addCommentsToRedux = (event) => {
        this.props.dispatch({
            type: 'COMMENT_REDUX',
            payload: this.state.comment,
        })
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Comments"
                    onChange={this.changeComments}
                />
                <button onClick={this.addCommentsToRedux}>Next</button>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Comments);
