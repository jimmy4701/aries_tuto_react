import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { DefaultContextApp } from './contexts_init'

ReactDOM.render(<DefaultContextApp />, document.getElementById('root'));

serviceWorker.unregister();
