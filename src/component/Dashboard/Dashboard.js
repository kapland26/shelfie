import './../../reset.css';
import './Dashboard.css'
import React, { Component } from 'react';
import Product from '../Product/Product.js';

class Dashboard extends Component{

    constructor(){
        super();

        this.state={       
        }
    }

    render(){
        var prodList = this.props.products.map((val, i)=>{
            return(
                <div className="prod-container" key={i}>
                    <Product url = {val.url} name= {val.name} price={val.price} />
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