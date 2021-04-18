import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import { Homepage } from './pages/Homepage';
import  {InfoPage}  from './pages/InfoPage.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      
    };
  }

  componentDidMount() {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(dog => this.setState({ dogs: dog }));
  }


  render() {
    const { dogs } = this.state;
    const allDogs = dogs.filter(dog =>
      dog.name
    );
    const filteredDogs = allDogs.slice(0,20)
    return (
      <Router>
        <Switch>
          <Route path = "/" exact component = {()=><Homepage dogs = {filteredDogs}/>} />
          <Route path = '/infopage' exact component = {InfoPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
