import './../../reset.css';
import './Form.css'
import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(){
        super();

        this.state={
            urlIn: "",
            nameIn: "",
            priceIn: "",
            buttonText: "Add to Inventory",
            currSelect:null
        }
    }

    componentDidUpdate(oldProps){
        console.log(this.props.currProd)
        if(this.props.currProd!=this.state.currSelect){
            console.log("In if" + this.props.currProd.url)
            this.setState({
                urlIn: this.props.currProd.url,
                nameIn: this.props.currProd.name,
                priceIn: this.props.currProd.price,
                currSelect: this.props.currProd,
                buttonText: "Save Changes"
            })
            console.log(this.state.nameIn)
        }
    }

    handleUrlIn(e){
        this.setState({
            urlIn:e
        })
    }

    handleNameIn(e){
        this.setState({
            nameIn:e
        })
    }

    handlePriceIn(e){
        this.setState({
            priceIn:e
        })
    }

    handleCancel(){
        this.setState({
            urlIn: "",
            nameIn: "",
            priceIn: "",
            buttonText: "Add to Inventory",
            currSelect:null
        })
    }

    handleAdd(){
        let body={
            url: this.state.urlIn,
            name: this.state.nameIn,
            price: this.state.priceIn
        } 
        axios.post("/api/product",body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("Bad post!");
        });
        this.props.getProducts;
        this.handleCancel();
    }

    handleUpdate(){
        let body= {
            url: this.state.urlIn,
            name: this.state.nameIn,
            price: this.state.priceIn
        }
        axios.put("/api/product"+this.props.id, body).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className = "Form" >
                Form!
                <br/>
                <div className="image-container">
                    <img src={this.state.urlIn} alt="preview form entry" />
                </div>
                <h1> Image URL:</h1>
                <input onChange={(e)=>this.handleUrlIn(e.target.value)} type="text" value={this.state.urlIn}/>
                <h1> Product Name:</h1>
                <input onChange={(e)=>this.handleNameIn(e.target.value)} type="text" value={this.state.nameIn}/>
                <h1> Price:</h1>
                <input onChange={(e)=>this.handlePriceIn(e.target.value)} type="text" value={this.state.priceIn}/>
                <br/>
                <button onClick={()=>this.handleCancel()}> Cancel </button>
                <button onClick={()=>this.handleAdd()}> {this.state.buttonText} </button>
            </div>
        )
    }
}

export default Form;