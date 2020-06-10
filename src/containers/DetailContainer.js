import { connect } from 'react-redux';
import Detail from '../components/Detail';
import addCustomInfo from '../actions/addCustomInfo';
import addToCart from '../actions/addToCart';

const mapStateToProps = (state) => {
    return {
        detailItem: state.detailItem,
        increaseCart: state.increaseCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCustomInfo: (e) => {dispatch(addCustomInfo(e.target.name, e.target.value));
        },
        addToCart: (id, customName, customNumber, customerSize) => {dispatch(addToCart(id, customName, customNumber, customerSize));
        }
    }
}
const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail)

export default DetailContainer;