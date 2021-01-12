import React, { useState } from "react";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Student from './components/Student'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Router>
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/student/">Student</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    

    <Switch>
      <Route exact path={`/`}>
        <Home/>
      </Route>
      <Route exact path={`/student`}>
        <Student/>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
