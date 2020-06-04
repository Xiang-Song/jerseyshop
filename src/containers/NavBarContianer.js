import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.totalQuantity
    }
};

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;