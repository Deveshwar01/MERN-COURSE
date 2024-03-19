import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Todos from './Pages/Todos';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeClassName="active">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/todos" activeClassName="active">Todos</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
