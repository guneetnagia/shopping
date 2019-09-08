import React from 'react';
import { Switch, Route } from 'react-router-dom';


import { HomePage } from '../pages/home-page/home-page.component';
import { ShopPage } from '../pages/shop-page/shop.component'
import { Header } from '../pages/header/header.component';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route exact path="/collection/:title" component={About} />
                    </Switch>
            </div>
        );
    }
}

function About() {
    return <h2>About</h2>
}