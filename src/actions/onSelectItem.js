import { SELECT_ITEM } from '../constants/constants';

const onSelectItem = (id) => {
    return {
        type: SELECT_ITEM,
        id: id
    };
    
}

export default onSelectItem;
