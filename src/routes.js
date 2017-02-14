import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import voteList from './vote-list';

export default (
    <Route component={App} path={App.path}>
        <IndexRoute component={voteList} />
    </Route>
);
