import React from 'react';
import Login from './Login'
import Register from './Register'
import { Router, Scene } from 'react-native-router-flux';

const Routes = () => (
    <Router>
        <Scene key="auth">
            <Scene key="login" title="Login" component={Login} initial={true} />
            <Scene key="register" title="Register" component={Register} />
        </Scene>
    </Router>
)
export default Routes;