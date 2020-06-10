import React from 'react';
import PromotionContainer from '../containers/PromotionContainer';
import { Link } from 'react-router-dom';


class MyCart extends React.Component {
    
    render () {
        var imgStyle = {
            width: "100px"
        }
        var itemStyle = {
            display: "flex",
            justifyContent: "space-around",
            margin: "20px"
        }
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item => {
                return(
                    
                        <div style={itemStyle} key={item.id}> 
                            <div><img src={item.img} alt={item.title} style={imgStyle}/>
                            <p>{item.title}</p>
                            </div>
                            <div>
                            <p>Custom Name --- {item.customName ? item.customName : 'NAN'}</p>
                            <p>Custom Number --- {item.customNumber ? item.customNumber : "NAN"}</p>
                            </div>
                            <div>
                                <p>Quantity: {item.quantity}</p>
                                <p>Size: {item.customSize} </p>
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
                <PromotionContainer />
                <p style={priceStyle}><button 
                disabled={this.props.total === 0
                 }> <Link to = "/checkout" style = {{textDecoration: "none", color: "black"}}>
                     Checkout</Link></button></p>
            </div>
        )
    }
}




export default MyCart;