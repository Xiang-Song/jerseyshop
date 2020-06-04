import { connect } from 'react-redux';
import JerseyList from  '../components/JerseyList';
import addToCart from '../actions/addToCart.js';


const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

const mapDispatchToProps = (dispatch) =>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id));
        }
    }

}

const JerseyListContainer = connect(mapStateToProps, mapDispatchToProps)(JerseyList);

export default JerseyListContainer;
