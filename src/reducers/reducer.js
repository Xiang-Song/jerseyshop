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
import { ADD_TO_CART, 
         DELETE_ITEM, 
         ADD_QUANTITY, 
         SUB_QUANTITY, 
         ADD_CODE,
         APPLY_CODE, 
         CHECK_OUT,
         ADD_BILLING_INFO,
         ADD_SHIPPING_INFO,
         SELECT_ITEM, 
         ADD_CUSTOM_INFO} from '../constants/constants.js';

const initState = {
    items:[
        {id:1, title:"Manchester United Away Jersey", brand: "Adidas", price:59.99, img:mua},
        {id:2, title:"Manchester United Third Jersey", brand: "Adidas", price:59.99, img:mut},
        {id:3, title:"Real Madrid Away Jersey", brand: "Adidas", price:69.99, img:rma},
        {id:4, title:"Real Madrid Home Jersey", brand: "Adidas", price:79.99, img:rmh},
        {id:5, title:"Arsenal Away Jersey", brand: "Adidas", price:59.99, img:asa},
        {id:6, title:"Arsenal Home Jersey", brand: "Adidas", price:69.99, img:ash},
        {id:7, title:"LiverPool Home Jersey", brand: "New Balance", price:69.99, img:liv},
        {id:8, title:"Tottenham Home Jersey", brand: "Nike", price:59.99, img:ttn},
        {id:9, title:"Chelsea Home Jersey", brand: "Nike", price:59.99, img:che},
        {id:10, title:"Manchester City Home Jersey", brand: "Puma", price:59.99, img:mct}
    ],
    detailItem:[],
    addedItems: [],
    total: 0,
    totalQuantity: 0,
    code: '',
    billing: {name: '', email:'', country: '', bAddress: '', bState: '', bZip: '', cardNumber: '', expDate: '', securityCode: ''},
    shipping: {sAddress: '', sState: '', sZip: ''},
    confirmInfo: '',
    increaseCart: false
}

const reducer = (state = initState, action) => {
    let originalTotal = 0;
            for (let item of state.addedItems) {
                originalTotal += item.price * item.quantity
            };
    switch (action.type) {
        case SELECT_ITEM:
            let selectedItem = state.items.find(item => item.id === action.id);
            selectedItem.quantity = 1;
            return {
                ...state,
                detailItem: selectedItem,
                increaseCart: false
            }
        
        case ADD_CUSTOM_INFO:
            return {
                ...state,
                detailItem: {...state.detailItem, [action.name]: action.value},
                increaseCart: false,
            }
        case ADD_TO_CART:
            let readyItem = {...state.detailItem};
            readyItem.quantity = parseInt(state.detailItem.quantity);
            readyItem.id = state.detailItem.id + state.detailItem.customName + state.detailItem.customNumber + state.detailItem.customSize ?
            state.detailItem.id + state.detailItem.customName + state.detailItem.customNumber + state.detailItem.customSize :
            state.detailItem.id;
            let cartHasItem = state.addedItems.find(item => item.id === readyItem.id);
            if (cartHasItem) {
                cartHasItem.quantity += readyItem.quantity;
                return {
                    ...state,
                    total: originalTotal + readyItem.price * readyItem.quantity,
                    totalQuantity: state.totalQuantity + readyItem.quantity, 
                    confirmInfo: '',
                    increaseCart: true
                };
            }
            else if (state.detailItem.customSize && state.detailItem.customSize !== "Select a size") {
                return {
                    ...state,
                    addedItems: [...state.addedItems, readyItem],
                    total: originalTotal + readyItem.price * readyItem.quantity,
                    totalQuantity: state.totalQuantity + readyItem.quantity,
                    confirmInfo: '',
                    increaseCart: true
                };
            }
            else {
                return {
                    ...state,
                    increaseCart: true
                }
            }
        
        case DELETE_ITEM:
            let delItem = state.addedItems.find(item=> item.id === action.id);
            return {
                ...state,
                addedItems: [...state.addedItems].filter(item => item.id !== action.id),
                total: originalTotal - (delItem.price * delItem.quantity),
                totalQuantity: state.totalQuantity -delItem.quantity,
                confirmInfo: ''
            }

        case ADD_QUANTITY:
            let addedItem = state.addedItems.find(item=> item.id === action.id);
            addedItem.quantity += 1;
            return {
                ...state,
                total: originalTotal+addedItem.price,
                totalQuantity: state.totalQuantity +1,
                confirmInfo: ''
            }

        case SUB_QUANTITY:
            let subedItem = state.addedItems.find(item=> item.id === action.id);
            subedItem.quantity -= 1;
            return {
                ...state,
                total: originalTotal-subedItem.price,
                totalQuantity: state.totalQuantity -1,
                confirmInfo: ''
            }

        case ADD_CODE:
            return {
                ...state,
                code: action.code,
                confirmInfo: ''
            }
        
        case APPLY_CODE:
            
            if (state.code === "onsale" && state.total > 200 && state.total > originalTotal-1) {
                return {
                    ...state,
                    total: state.total*0.85,
                    confirmInfo: ''
                }
            }
            else{
                return {...state}
            }
        
        case ADD_BILLING_INFO:
            return {
                ...state,
                billing: {...state.billing, [action.name]: action.value},
                confirmInfo: ''
            }

        case ADD_SHIPPING_INFO:
            
            return {
                ...state,
                shipping: {...state.shipping, [action.name]: action.value},
                confirmInfo: ''
            }

        case CHECK_OUT:
            let cName = state.billing.name;
            let cAddress = state.shipping.sAddress;
            let cState = state.shipping.sState;
            let cZip = state.shipping.sZip
            return {
                ...state,
                addedItems: [],
                totalQuantity: 0,
                total: 0,
                billing: {name: '', email:'', country: '', bAddress: '', bState: '', bZip: '', cardNumber: '', expDate: '', securityCode: ''},
                shipping: {sAddress: '', sState: '', sZip: ''},
                confirmInfo: cName + ", thank you for your order, We will ship your order to " + cAddress+', ' + cState+ ', ' + cZip+ ', with in 2 days.'
            }    

        default: {
            return state
        }
    }
}

export default reducer;