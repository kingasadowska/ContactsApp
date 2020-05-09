import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import ContactState from './context/contact/ContactState';
import Login from './components/auth/Login';
import './App.css';

const App = () => {
  return (
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ContactState>
  );
};

export default App;
