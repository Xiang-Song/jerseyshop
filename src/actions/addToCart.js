import { ADD_TO_CART } from '../constants/constants';

const addToCart = (id, customName, customNumber, customerSize) => {
    return {
        type: ADD_TO_CART,
        id: id,
        customName: customName, 
        customNumber: customNumber, 
        customerSize: customerSize
    };
    
};


export default addToCart;