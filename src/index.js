import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './app'
import store from './store' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
      <App />
   </Provider>
,document.getElementById('root'));