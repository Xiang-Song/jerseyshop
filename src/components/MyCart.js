import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MyCart extends React.Component {
    
    render () {
        var imgStyle = {
            width: "100px"
        }
        var itemStyle = {
            display: "flex",
            justifyContent: "space-around"
        }
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item => {
                return(
                    
                        <div style={itemStyle} key={item.id}> 
                        <div><img src={item.img} alt={item.title} style={imgStyle}/></div>
                        <div>
                            <p>{item.title} --- Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                        <div>
                            <button onClick={()=>{this.props.deleteItem(item.id)}}>Delete</button>
                            <button onClick={()=>{this.props.addQuantity(item.id)}}>&#43; </button>
                            <button disabled= {item.quantity < 2} 
                                    onClick={()=>{this.props.subQuantity(item.id)}}>&#8722;</button>
                        </div>
                        </div>
                        
                    
                )
            })
        ):

        (
            <p>Your Cart is Empty</p>
        )
        var priceStyle={
            display: "flex",
            justifyContent: "flex-end"
        }
        return (
            <div>
                <h3>Your Cart Details:</h3>
                {addedItems}
                <hr/>
                <p style={priceStyle}><b>Your total:&nbsp;&nbsp;</b> ${(this.props.total).toFixed(2)}</p>
            </div>
        )
    }
}




export default MyCart;