import { ADD_CUSTOM_INFO } from '../constants/constants';

const addCustomInfo = (name, value) => {
    return {
        type: ADD_CUSTOM_INFO,
        name: name,
        value: value
    }
}

export default addCustomInfo;
