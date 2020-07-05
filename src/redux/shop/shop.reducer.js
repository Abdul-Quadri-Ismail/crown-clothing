import ShopType from './shop.type';
import { act } from 'react-dom/test-utils';
const INITIAL_STATE = {

    collections: null
}


const shopReducer = (state=INITIAL_STATE,action) => {

    switch(action.type) {
        case ShopType.UPDATE_COLLECTION:

        return{
            ...state,
            collections:action.payload
        }
        default:
            return state;
    }
}


export default shopReducer;