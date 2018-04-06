import React, { Component } from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';

const baseUrl = "/api/inventory";

class App extends Component {
  constructor(){
    super();

    this.state={
      products:[]
    }
    this.getProducts= this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get(baseUrl).then(
      (res)=> {
        this.setState({
          products: res.data
        })
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <div className="dash-container">
            <Dashboard products={this.state.products}/>
          </div>
          <div className="form-container">
            <Form getProducts = {this.getProducts()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
