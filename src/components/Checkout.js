import React from 'react';

class Checkout extends React.Component {
    render() {
        var style = {
            display: "flex",
            justifyContent: "space-around"
        }
        var divStyle = {
            display: "flex",
            justifyContent: "flex-end"
        }
        return (
            <div>
            <div style={style}>
                <div>
                <h3>Billing Details</h3>
                <label>First & Last Name</label><br/>
                <input name = 'name' value = {this.props.billing.name} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Email address</label><br/>
                <input name = 'email' value = {this.props.billing.email} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Country</label><br/>
                <input name = 'country' value = {this.props.billing.country} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Street address</label><br/>
                <input name = 'bAddress' value = {this.props.billing.bAddress} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>State</label><br/>
                <input name = 'bState' value = {this.props.billing.bState} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Zip</label><br/>
                <input name = 'bZip' value = {this.props.billing.bZip} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                </div>
                <div>
                <h3>Payment & Shipping</h3>
                <label>Card Number</label><br/>
                <input name = 'cardNumber' value = {this.props.billing.cardNumber} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Expiration Dtae</label><br/>
                <input name = 'expDate' value = {this.props.billing.expDate} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Security Code</label><br/>
                <input name = 'securityCode' value = {this.props.billing.securityCode} onChange={(e) => {this.props.addBillingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Shipping address</label><br/>
                <input name = 'sAddress' value={this.props.shipping.sAddress} onChange= {(e) => {this.props.addShippingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>State</label><br/>
                <input name = 'sState' value={this.props.shipping.sState} onChange= {(e) => {this.props.addShippingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                <label>Zip</label><br/>
                <input name = 'sZip' value={this.props.shipping.sZip} onChange= {(e) => {this.props.addShippingInfo(e)}} style = {{width:"30vw"}}></input><br/><br/>
                </div>
            </div>
            <div style={divStyle}> Your Total is ${(this.props.total).toFixed(2)}</div>
            <div style={divStyle}><button onClick = {(total)=>{this.props.onCheckout(total)}}>Place Order</button></div>
            <p style={{color:"red"}}>{this.props.confirmInfo}</p>
            </div>
            
        )
    }
   
}

export default Checkout;
