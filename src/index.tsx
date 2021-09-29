import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import "antd/dist/antd.css";
import {store} from "./store/store";
import { AppContainer } from './AppContainer';
import { createGlobalStyle } from 'styled-components';
let GlobalStyle=createGlobalStyle`
    p{
        font-size:1.7vmin
    };
    a{
       font-size:1.7vmin
    };
    h2{
    font-size:2.7vmin
    }
    
`
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyle/>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
