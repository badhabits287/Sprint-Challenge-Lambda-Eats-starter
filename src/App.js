import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { Route, Switch, Link } from "react-router-dom";
import {Button } from "reactstrap";
import Pizza from "./Assets/Pizza.jpg";

function App() {
  const imgStyle = {
    width: "300px",
    height: "200px",
    borderRadius: '10px'
  };

  return (
    <center>
      <top>
        <img src={Pizza} style={imgStyle} alt='Pizza'/>
      </top>
      <div>
        <div className="navbar">
          <Link to="/">
            <Button   name="homebutton">Home</Button>
          </Link>

          <Link to="/form">
            <Button name="orderbutton">Order</Button>
          </Link>
        </div>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
          </Switch>
        </div>
      
    </center>
  );
}

export default App;
