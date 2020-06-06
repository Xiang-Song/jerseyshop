import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import onCheckout from '../actions/onCheckout';
import addBillingInfo from '../actions/addBillingInfo';
import addShippingInfo from '../actions/addShippingInfo';

const mapStateToProps = (state)=>{
    return {
      total: state.total,
      billing: state.billing,
      shipping: state.shipping,
      confirmInfo: state.confirmInfo
    }
  }

const mapDispatchToProps = (dispatch) =>{
    
    return{
        onCheckout: (id)=>{dispatch(onCheckout(id));
        },
        addBillingInfo: (e) => {dispatch(addBillingInfo(e.target.name, e.target.value));
        },
        addShippingInfo: (e) => {dispatch(addShippingInfo(e.target.name, e.target.value));
        }
    }

}

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;