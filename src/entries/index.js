import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory,useRouterHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';
import {createHashHistory} from 'history'

const appHistory = useRouterHistory(createHashHistory)({queryKey: false})

ReactDOM.render(<Routes history={appHistory} />, document.getElementById('root'));
