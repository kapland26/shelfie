import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import routes from "./routes";
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';

class App extends Component {
  constructor(){
    super();

    this.state={
      paramId:""
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container" >
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
