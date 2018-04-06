import './reset.css';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state={
      products:[{id:0, name: 'boot', url:'https://www.hautelookcdn.com/products/STS97481/large/8060862.jpg', price: 40},
      {id:1, name: 'hat', url:'https://lf.lids.com/hwl?set=sku[20833797],c[2],w[1000],h[750]&call=url[file:product]', price:12.50},
      {id:2, name: 'jacket', url:'https://cdn.shopify.com/s/files/1/0262/3477/products/product-image-204238385.jpg?v=1503519546', price: 120}]
    }
  }

  // componentDidMount(){
    // axios.get(baseUrl).then(
    //   (res)=> {
    //     this.setState({
    //       books: res.data
    //     })
    //   }
    // );
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <div className="dash-container">
            <Dashboard products={this.state.products}/>
          </div>
          <div className="form-container">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
