import React, {Component} from 'react';
import LeftMain from './views/left-main/left-main/LeftMain'
import StudentLogin from "./views/login/student-login";
import StudentRegister from "./views/login/student-register";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css'

class App extends Component {
    Test() {
        return <div>test</div>
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' component={StudentLogin}/>
                    <Route path='/home' component={LeftMain} />
                    <Route path='/test' component={this.Test} />
                    <Route exact path='/register' component={StudentRegister} />
                    <Redirect to='/login' />
                </Switch>
            </Router>
        );
    }
}

export default App;