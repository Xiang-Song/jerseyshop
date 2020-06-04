import { DELETE_ITEM} from '../constants/constants';

const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id: id
    };
    
};

export default deleteItem;