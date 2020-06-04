import asa from '../JerseyImg/Arsenal-away.JPG';
import ash from '../JerseyImg/Arsenal-home.JPG';
import che from '../JerseyImg/Chelsea.JPG';
import liv from '../JerseyImg/Liverpool.JPG';
import mct from '../JerseyImg/Mancity.JPG';
import mua from '../JerseyImg/MU-away.JPG';
import mut from '../JerseyImg/MU-third.JPG';
import rma from '../JerseyImg/RM-away.JPG';
import rmh from '../JerseyImg/RM-home.JPG';
import ttn from '../JerseyImg/Tottenham.JPG';
import { ADD_TO_CART, DELETE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../constants/constants.js';

const initState = {
    items:[
        {id:1, title:"Manchester United Away Jersey", price:59.99, img:mua},
        {id:2, title:"Manchester United Third Jersey", price:59.99, img:mut},
        {id:3, title:"Real Madrid Away Jersey", price:69.99, img:rma},
        {id:4, title:"Real Madrid Home Jersey", price:79.99, img:rmh},
        {id:5, title:"Arsenal Away Jersey", price:59.99, img:asa},
        {id:6, title:"Arsenal Home Jersey", price:69.99, img:ash},
        {id:7, title:"LiverPool Home Jersey", price:69.99, img:liv},
        {id:8, title:"Tottenham Home Jersey", price:59.99, img:ttn},
        {id:9, title:"Chelsea Home Jersey", price:59.99, img:che},
        {id:10, title:"Manchester City Home Jersey", price:59.99, img:mct}
    ],
    addedItems: [],
    total: 0,
    totalQuantity: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let selectedItem = state.items.find(item => item.id === action.id);
            let cartHasItem = state.addedItems.find(item => item.id === action.id);
            if (cartHasItem) {
                selectedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + selectedItem.price,
                    totalQuantity: state.totalQuantity + 1,
                };
            }
            else {
                selectedItem.quantity = 1;
                return {
                    ...state,
                    addedItems: [...state.addedItems, selectedItem],
                    total: state.total + selectedItem.price,
                    totalQuantity: state.totalQuantity + 1,
                };
            }
        
        case DELETE_ITEM:
            let delItem = state.addedItems.find(item=> item.id === action.id);
            return {
                ...state,
                addedItems: [...state.addedItems].filter(item => item.id !== action.id),
                total: state.total - (delItem.price * delItem.quantity),
                totalQuantity: state.totalQuantity -1
            }

        case ADD_QUANTITY:
            let addedItem = state.addedItems.find(item=> item.id === action.id);
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total+addedItem.price,
                totalQuantity: state.totalQuantity +1
            }

        case SUB_QUANTITY:
            let subedItem = state.addedItems.find(item=> item.id === action.id);
            subedItem.quantity -= 1;
            return {
                ...state,
                total: state.total-subedItem.price,
                totalQuantity: state.totalQuantity -1
            }

        default: {
            return state;
        }
    }
}

export default reducer;