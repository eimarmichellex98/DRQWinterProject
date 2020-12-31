import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { MainContent } from './components/maincontent';//can access maincontent.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';//controls needed to switch pages//controls needed to switch pages
import { Current } from './components/currentreads';//access currentreads using this path
import { Genre } from './components/findgenre';//access findgenre using this path
import { Suggest } from './components/suggestedreads';//access suggestedreads using this path


//App is now a class that extends Component
class App extends Component {
  //render method is needed to display class
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={MainContent} exact />
            <Route path='/suggest' component={Suggest} exact />
            <Route path='/current' component={Current} exact />
            <Route path='/genre' component={Genre} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
