import React from 'react';
import ReactDOM from 'react-dom';
import './shopping-cart/index.css';
import App from './shopping-cart/App';

import {AppProvider} from "./shopping-cart/contexts/context";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
