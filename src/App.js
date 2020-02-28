import React, { Component } from 'react';
import style from './style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import Main from './views/main';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className={style.App}>
                    <h1 className={style.headerTitle}>Welcome to stock Management system</h1>
                    <Main />
                </div>
            </Provider>
        );
    }
}

export default App
