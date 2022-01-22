import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials=true;
axios.defaults.baseURL='http://rem-rest-api.herokuapp.com/api';

const sagaMiddleware=createSagaMiddleware();
const store=  createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
