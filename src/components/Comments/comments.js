import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import Review from '../Review/review';

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
        }
    }

    changeComment = (event) => {
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
                <h2 className="title">Any Comments to Add?</h2>
                <div className="field">
                    <div className="control">
                        <input className="input is-info is-rounded"
                            type="text"
                            placeholder="Comments"
                            onChange={this.changeComment}
                        />
                        <button className="button is-rounded is-info" onClick={this.addCommentsToRedux}>Next</button>
                    </div>
                </div>
                <Review />
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Comments);
