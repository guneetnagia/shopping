import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import '../src/App.css';

import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    )
}
export default App;