import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import Review from '../Review/review';

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
                <h2 className="title">How Supported Do You Feel Today?</h2>
                <div className="field">
                    <div className="control">
                        <input className="input is-info is-rounded"
                            type="number"
                            placeholder="Supported"
                            onChange={this.changeSupport}
                        />
                        <button className="button is-rounded is-info" onClick={this.addSupportToRedux}>Next</button>
                    </div>
                </div>
                <Review/>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(Supported);
