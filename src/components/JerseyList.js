import React from 'react';
import { Link } from 'react-router-dom';

class JerseyList extends React.Component {
    

    render () {
        var cardStyle = {
            width: "27%",
            height: "50%",
            background: "#f4f6ff",
            margin: "20px",
            fontWeight: "bold"
        }
        var imgStyle = {
            width: "100%",
        }
        
        let itemList = this.props.items.map(item =>{
           
            return (
                <div style={cardStyle} key={item.id}>
                    <div onClick = {()=>{this.props.onSelectItem(item.id)}}>
                    <Link to = {'detail/' + item.id} style = {{textDecoration: "none", color: "black"}}>
                        <img src={item.img} alt={item.title} style={imgStyle} />
                        <p >{item.title}</p>
                        <p style= {{display: "flex", justifyContent: "space-between"}}>
                        <span>{item.brand}</span><span>${item.price}</span>
                        </p>
                        
                    </Link>   
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