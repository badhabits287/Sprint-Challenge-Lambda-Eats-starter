import React from 'react';
import Form from './components/Form';
import Home from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, CardImg,Button } from 'reactstrap';
import Pizza from './Assets/Pizza.jpg'

function App() {



const  imgStyle = {
   width:'300px',
   height:'200px'
 }

  
  return (
  <center>
  <top><CardImg src={ Pizza} style={ imgStyle }/></top>
    <Navbar style={{border:'1px solid red'}}>
    
      <NavLink className="navbar">
          <Link to="/">
            <Button name = 'homebutton'>Home</Button>
            </Link>
          
          <Link to="/form"> 
          <button name = 'orderbutton'>Order</button>
          </Link>
          
      </NavLink>
      <NavItem className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </NavItem>
      
    </Navbar>
    
    </center>
  );
}

export default App;