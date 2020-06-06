import { ADD_SHIPPING_INFO } from '../constants/constants';

const addShippingInfo = (name, value) => {
    return {
        type: ADD_SHIPPING_INFO,
        name: name,
        value: value
    }
}

export default addShippingInfo;
