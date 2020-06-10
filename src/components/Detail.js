import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
    render () {
        let style = {
            display: "flex",
            justifyContent: "space-around"
        }
        let imgStyle ={
            width: "40vw"
        }
        let item = this.props.detailItem;
    
        return (
            <div style = {style}>
                <div>
                <img src={item.img} alt={item.title} style = {imgStyle} />
                </div>
                <div>
                    <p style={{fontSize: "25px"}}>{item.brand}</p>
                    <p style={{fontSize: "35px", fontWeight: "bolder"}}>{item.title}</p>
                    <hr/>
                    <p style={{fontSize: "20px", fontWeight: "bold", color: "darkblue"}}>Customize Your Jersey:</p>
                    <div style = {{display: "flex", justifyContent: "space-between", fontSize: "15Px"}}>
                        <div style= {{width: "20vw"}}>
                            <label>Name Printed on Back</label><br/>
                            <input style= {{width: "100%"}}
                            name = "customName" value = {this.props.customName}
                            onChange= {(e)=>{this.props.addCustomInfo(e)}}></input><br/><br/>
                            <label>Size</label><br/>
                            <select style= {{width: "100%"}}
                            name = "customSize" value = {this.props.customSize}
                            onChange = {(e)=>{this.props.addCustomInfo(e)}}>
                                <option>Select a size</option>
                                <option>xs</option>
                                <option>s</option>
                                <option>m</option>
                                <option>l</option>
                                <option>xl</option>
                            </select>
                        </div>
                        
                        <div style= {{width: "5vw"}}>
                            <label>Number</label><br/>
                            <input style= {{width: "100%"}}
                            name = "customNumber" value = {this.props.customNumber}  
                            onChange = {(e)=>{this.props.addCustomInfo(e)}}></input><br/><br/>
                            <label>Quantity</label><br/>
                            <select style= {{width: "100%"}}
                            name = "quantity" value = {this.props.quantity}  
                            onChange = {(e)=>{this.props.addCustomInfo(e)}}>
                                <option>1 </option>
                                <option>2 </option>
                                <option>3 </option>
                                <option>4 </option>
                                <option>5 </option>
                                <option>6 </option>
                                <option>7 </option>
                            </select>
                        </div>
                    </div><br/><br/>
                    <div style={{color: "red", display: this.props.increaseCart ? this.props.detailItem.customSize && this.props.detailItem.customSize !="Select a size" ? "none" : "block" : "none"}}>
                        !!! Please Select a Size !!!
                    </div><br/>
                    <button style={{width:"100%", background: "black", color: "white", fontSize: "20px"}}
                    onClick = {() => {this.props.addToCart(item.id, item.customName, item.customNumber, item.customSize)}}
                    >Add to Cart</button>
                    <br/><br/>
                    <div style={{display: this.props.increaseCart && this.props.detailItem.customSize && this.props.detailItem.customSize !="Select a size" ? 'block' : 'none'}}>
                        <button style ={{ width: "18vw", background: "white", fontSize: "20px"}}><Link to = "/home" style = {{textDecoration: "none", color: "black"}}>Continue Shopping</Link></button>
                        <button style ={{ width: "18vw", background: "black", fontSize: "20px"}}><Link to = "/cart" style = {{textDecoration: "none", color: "white"}}> View Cart & Checkout</Link></button>
                    </div>
                </div>
            
            </div>
        )
        
    }
    }
    

export default Detail;