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
      products:[],
      currProd:null,
      paramId:""
    }
    this.getProducts= this.getProducts.bind(this);
    // this.setSelected= this.setSelected.bind(this);
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
  // setSelected(prod){
    // console.log("In set selected! prod: "+prod);
    // this.setState({
    //   currProd: prod
    // })
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <div className="dash-container">
            {/* <Dashboard setSelected = {this.setSelected()} getProducts = {this.getProducts()} products={this.state.products}/> */}
            <Dashboard getProducts = {this.getProducts()} products={this.state.products}/>

          </div>
          <div className="form-container">
            <Form currProd = {this.state.currProd} getProducts = {this.getProducts()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
