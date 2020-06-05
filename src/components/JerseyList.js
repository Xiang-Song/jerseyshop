import React from 'react';

class JerseyList extends React.Component {
    

    render () {
        var cardStyle = {
            width: "27%",
            height: "50%",
            background: "beige",
            margin: "20px"
        }
        var imgStyle = {
            width: "100%",
        }
        var shopStyle = {
            display: "flex",
            justifyContent: "space-between"
        }
        var inputStyle={
            width:"50%"
        }
        let itemList = this.props.items.map(item =>{
           
            return (
                <div style={cardStyle} key={item.id}>
                    <div>
                        <img src={item.img} alt={item.title} style={imgStyle} />
                        <span>{item.title}</span>
                        
                    </div>
                    <div style={shopStyle}>
                        <span>${item.price}</span>
                        <button onClick = {()=>{this.props.addToCart(item.id)}}>Add to Cart</button>
                    </div>
                </div>
            )
        })

        var liststyle = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"flex-start"
          };
        return (
            <div>
                <div style={liststyle}>{itemList}</div>
            </div>
        )
    }
}



export default JerseyList;