import React, { Component } from 'react';
import axios from 'axios';
import './../../reset.css';
import './Dashboard.css'
import Product from '../Product/Product.js';

class Dashboard extends Component{

    constructor(){
        super();

        this.state={       
        }
        this.deleteProd = this.deleteProd.bind(this);
    }

    deleteProd(id){
        console.log("Inside component delete!");
        axios.delete("/api/product/"+id).then( (res) => {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.props.getProducts;
    }

    render(){
        var prodList = this.props.products.map((val, i)=>{
            return(
                <div className="prod-container" key={i}>
                    <Product setSelected = {this.props.setSelected} deleteProd = {this.deleteProd} id={val.id} url = {val.url} name= {val.name} price={val.price} />
                    {/* <Product deleteProd = {this.deleteProd} id={val.id} url = {val.url} name= {val.name} price={val.price} />  */}
                </div>
            )
        })
        return(
            <div className = "Dashboard" >
                Dashboard!
                {prodList}
            </div>
        )
    }
}

export default Dashboard;