import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserContext, MoviesContext } from './contexts'
import { UserAuth, MoviesHandler } from './contexts_init'

const WithUserApp = (props) => (
    <UserContext.Provider value={new UserAuth()}>
        {props.children}
    </UserContext.Provider>
)

const WithMoviesApp = (props) => (
    <MoviesContext.Provider value={new MoviesHandler()}>
        {props.children}
    </MoviesContext.Provider>
)

ReactDOM.render(
<WithUserApp>
    <WithMoviesApp>
        <App />
    </WithMoviesApp>
</WithUserApp>, document.getElementById('root'));

serviceWorker.unregister();
