import React from 'react';
import { HomePage } from '../pages/home-page/home-page.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <switch>
                        <Route path="/" component={HomePage} />
                        <Route path="/about" component={About} />
                    </switch>
                </div>
            </Router>
        );
    }
}

function About(){
    return <h2>About</h2>
}