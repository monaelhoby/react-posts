import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'


import allPosts from './pages/posts/allPosts'
import addPost from './pages/admin/addPost'
import Profile from './pages/admin/profile'
import Store from './store/store'

function App() {

  return (
    <Provider store={Store}>
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route path='/' exact component={allPosts} />
          <Route path='/addPost' exact component={addPost} />
          <Route path='/addPost/:id' exact component={addPost} />
          <Route path='/Profile' exact component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
