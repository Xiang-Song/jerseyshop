import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const mapStateToProps = (state)=>{
    return {
      total: state.total
    }
  }

// const mapDispatchToProps = (dispatch) =>{
    
//     return{
//         addToCart: (id)=>{dispatch(addToCart(id));
//         }
//     }

// }

const CheckoutContainer = connect(mapStateToProps)(Checkout);

export default CheckoutContainer;