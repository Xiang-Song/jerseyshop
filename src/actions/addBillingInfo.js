import { ADD_BILLING_INFO } from '../constants/constants';

const addBillingInfo = (name, value) => {
    return {
        type: ADD_BILLING_INFO,
        name: name,
        value: value
    }
}

export default addBillingInfo;
