import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Example1 from './examples/Example1';
import Example2 from './examples/Example2';
import ExampleApi from './examples/ExampleApi';

ReactDOM.render(
  <React.StrictMode>
    <ExampleApi />
  </React.StrictMode>,
  document.getElementById('root')
);


