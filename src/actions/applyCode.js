import { APPLY_CODE } from '../constants/constants';

const applyCode = (total) => {
    return {
        type: APPLY_CODE,
        total: total
    };
};

export default applyCode;