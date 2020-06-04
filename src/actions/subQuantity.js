import { SUB_QUANTITY } from '../constants/constants';

const subQuantity =(id) => {
    return {
        type: SUB_QUANTITY,
        id: id
    };
};

export default subQuantity;