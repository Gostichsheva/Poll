import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import voteList from './vote-list';
import voteListItems from './vote-list-items';
import voteResult from './vote-result';
//import * as actions from './actions';

export default (
    <Route component={App} path={App.path}>
        <IndexRoute component={voteList} />
        <Route component={voteListItems} path={voteListItems.path} />
        <Route component={voteResult} path={voteResult.path} />
    </Route>
);
