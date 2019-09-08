import React from 'react';
import { HomePage } from '../pages/home-page/home-page.component';
import {ShopPage} from '../pages/shop-page/shop.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route exact path="/collection/:title" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

function About(){
    return <h2>About</h2>
}