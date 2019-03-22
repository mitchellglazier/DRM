import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { BrowserRouter } from 'react-router-dom';
import 'datatables.net-dt';


ReactDOM.render(
    <BrowserRouter>
<App />   
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
