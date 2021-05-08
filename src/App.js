import React, { useState } from 'react';
import './App.css';

import NewPost from './Pages/NewPost'
import PostList from  './Pages/PostList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
<Router>
<Navbar className="bg-success text-white p-3 mt-3 border rounded" light expand="md">
        <NavbarBrand href="/" className="text-white">PERIODICO INTERNO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
              <Link to="/" className="nav-link text-white" >&#9881;ADMINISTRAR</Link>
            
            
              <Link to="/postList" className="nav-link text-white" >&#128065;VISULIZAR</Link>
            

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
             BUSCAR
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  CONVOCATORIAS
                </DropdownItem>
                <DropdownItem>
                  ARTE Y CULTURA
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  INGLES
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


          </Nav>
          <NavbarText className="text-white">TECNOLOGICO DE ESTUDIOS SUPERIORES DE IXTAPALUCA</NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
          <Route exact path="/">
            <NewPost />
          </Route>
          <Route path="/postList">
            <PostList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
