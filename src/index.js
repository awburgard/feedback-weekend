import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state=[], action)=> {
    if (action.type === 'FEEDBACK_REDUX'){
        return action.payload;
    } else if (action.type === 'FEELINGS_REDUX'){
        return action.payload;
    } else if (action.type === 'UNDERSTANDING_REDUX'){
        return action.payload;
    } else if (action.type === 'SUPPORT_REDUX'){
        return (action.payload);
    } else if (action.type === "COMMENTS_REDUX"){
        return (action.payload);
    } else if (action.type === "REVIEW_REDUX"){
        return (action.payload);
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
