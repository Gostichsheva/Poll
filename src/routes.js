import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import voteList from './vote-list';
//import * as actions from './actions';

export default (
    <Route component={App} path={App.path}>
        <IndexRoute component={voteList} />
    </Route>
);
