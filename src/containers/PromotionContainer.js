import { connect } from 'react-redux';
import Promotion from  '../components/Promotion';
import addCode from '../actions/addCode';
import applyCode from '../actions/applyCode';


const mapStateToProps = (state)=>{
    return {
      total: state.total
    }
  }

const mapDispatchToProps = (dispatch) =>{
    
    return{
        addCode: (e)=>{dispatch(addCode(e.target.value))},
        applyCode: (total) => {dispatch(applyCode(total))}
    }

}

const PromotionContainer = connect(mapStateToProps, mapDispatchToProps)(Promotion);

export default PromotionContainer;