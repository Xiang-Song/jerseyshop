import { ADD_QUANTITY } from '../constants/constants';

const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id: id
    };
};

export default addQuantity;
