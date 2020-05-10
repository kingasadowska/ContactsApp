import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import ContactState from './context/contact/ContactState';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';
import Alerts from './components/common/Alerts/Alerts';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                  </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
    </ContactState>
    </AuthState>
  );
};

export default App;
