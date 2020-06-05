import React from 'react';

const Checkout = (props) => {
    var style = {
        display: "flex",
        justifyContent: "space-around"
    }
    var divStyle = {
       
    }
    return (
        <div>
        <div style={style}>
            <div style = {divStyle}>
            <h3>Billing Details</h3>
            <label>First & Last Name</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Email address</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Country</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Street address</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>State</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Zip</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            </div>
            <div>
            <h3>Payment & Shipping</h3>
            <label>Card Number</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Expiration Dtae</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Security Code</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Shipping address</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>State</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            <label>Zip</label><br/>
            <input style = {{width:"30vw"}}></input><br/><br/>
            </div>
        </div>
        <div> Your Total is ${(props.total).toFixed(2)}</div>
        <div><button>Place Order</button></div>
        </div>
        
    )
}

export default Checkout;
