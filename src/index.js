import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserContext } from './contexts'

class UserAuth {
    constructor(){
        this.user = {
            authenticated: false,
            username: null
        }
    }

    signIn = (user) => {
        this.user = {
            username: user.username,
            authenticated: true
        }
        return this.user
    }

    logout = () => {
        this.user = {
            username: null,
            authenticated: false
        }
        console.log('userContext', this.user)
        return this.user
    }
}

const WithUserApp = () => (
    <UserContext.Provider value={new UserAuth()}>
        <App />
    </UserContext.Provider>
)

ReactDOM.render(<WithUserApp />, document.getElementById('root'));

serviceWorker.unregister();
