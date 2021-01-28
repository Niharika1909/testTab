import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SummaryTab from './SummaryTab';
import "@deere/ux.uxframe-core/dist/css/uxframe.min.css";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
            <SummaryTab/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

