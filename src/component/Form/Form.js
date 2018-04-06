import './../../reset.css';
import './Form.css'
import React, { Component } from 'react';

class Form extends Component{

    constructor(){
        super();

        this.state={
            urlIn: "",
            nameIn: "",
            priceIn: "",
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
            priceIn: ""
        })
    }

    handleAdd(){
        
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
                <button> Add to Inventory </button>
            </div>
        )
    }
}

export default Form;