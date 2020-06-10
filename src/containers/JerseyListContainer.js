import { connect } from 'react-redux';
import JerseyList from  '../components/JerseyList';
import addToCart from '../actions/addToCart.js';
import onSelectItem from '../actions/onSelectItem';


const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

const mapDispatchToProps = (dispatch) =>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id));
        },
        onSelectItem: (id)=> {dispatch(onSelectItem(id));
        }
    }

}

const JerseyListContainer = connect(mapStateToProps, mapDispatchToProps)(JerseyList);

export default JerseyListContainer;
