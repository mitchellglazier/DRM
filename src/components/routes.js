import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Expenses from './expenses/expenses';
import Messages from './messages';
import Documents from './documents';
import Help from './help';
import Privacy from './privacyTerms';
import Calendar from './calendar/calendar';
import Profile from './profile';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Expenses} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/messages" component={Messages} />
        <Route path="/documents" component={Documents} />
        <Route path="/help" component={Help} />
        <Route path="/privacyTerms" component={Privacy} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/profile" component={Profile} />
    </Switch>
)

export default Routes;