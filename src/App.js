import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import '../src/App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser : user
            })
            console.log(user);
        })
    }

    componentWillMount() {
       // this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/signIn" component={SignInAndSignUp} />
                </Switch>
            </div>
        )
    }
}
export default App;