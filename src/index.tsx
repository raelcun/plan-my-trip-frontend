import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import reportWebVitals from './reportWebVitals';
import { setupWorker } from 'msw';
import { happyPath } from './mocks';

const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// setup mocking locally, then start app
setupWorker(...happyPath).start().then(() => renderApp())

// render app directly, no mocking (hitting live server)
// renderApp()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
