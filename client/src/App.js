import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
