import { ADD_TO_CART } from '../constants/constants';

const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id
    };
    
};


export default addToCart;