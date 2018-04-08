import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/add' component={Form}/>
            <Route path='/edit/:id' component={Form} />
        </Switch>
    </div>
)