import React from 'react';

class Promotion extends React.Component {
    render(){
        var style = {
            display: "flex",
            justifyContent: "flex-end"
        }
        return(
            <div style={style}>
                <span>Coupon: <input name="promtCode" type="text" value={this.props.promtCode}
                onChange={(e) => {this.props.addCode(e)}}></input></span>
                &nbsp;
                <button onClick = {(total) => {this.props.applyCode(total)}}>Apply</button>
            </div>
        )
    }
}
 
export default Promotion;

