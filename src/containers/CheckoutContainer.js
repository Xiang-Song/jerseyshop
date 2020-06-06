import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import onCheckout from '../actions/onCheckout';

const mapStateToProps = (state)=>{
    return {
      total: state.total
    }
  }

const mapDispatchToProps = (dispatch) =>{
    
    return{
        onCheckout: (id)=>{dispatch(onCheckout(id));
        }
    }

}

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;