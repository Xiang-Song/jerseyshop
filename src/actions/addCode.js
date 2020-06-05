import { ADD_CODE } from '../constants/constants';

const addCode = (code) => {
    return {
        type: ADD_CODE,
        code: code
    };
};

export default addCode;