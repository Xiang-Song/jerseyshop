import { connect } from 'react-redux';
import MyCart from '../components/MyCart';
import deleteItem from '../actions/deleteItem';
import addQuantity from '../actions/addQuantity';
import subQuantity from '../actions/subQuantity';


const mapStateToProps = (state)=>{
    return {
      items: state.addedItems,
      total: state.total
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    
    return{
        deleteItem: (id)=>{dispatch(deleteItem(id))},
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        subQuantity: (id) =>{dispatch(subQuantity(id))}
    }

}

const MyCartContainer = connect(mapStateToProps, mapDispatchToProps)(MyCart);

export default MyCartContainer;