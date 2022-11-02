import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

//const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const store=createStore(reducers,applyMiddleware(reduxThunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
 
);
