import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './login/login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';


function App() {
  // if(!localStorage.getItem('username')){
  //   return (
  //     <Login />
  //   );
  // } else {
  return (   
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link to ="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
  // }
}

function Home() {
  return <h2>Home page</h2>
}

function About() {
  return <h2>About page</h2>
}

function Users() {
  return <h2>Users page</h2>
}


export default App;
