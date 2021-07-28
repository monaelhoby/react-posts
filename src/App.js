import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import addProduct from './pages/admin/addProduct'
import Profile from './pages/admin/profile'

function App() {

  return (
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/addPost' exact component={addProduct} />
          <Route path='/addPost/:id' exact component={addProduct} />
          <Route path='/Profile' exact component={Profile} />
        </Switch>
      </Router>
  );
}

export default App;
