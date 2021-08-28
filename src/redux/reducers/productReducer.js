import { Actiontypes } from "../constants/action-types";
const initialstate = {
    products: [],
};
export const productReducer = (state = initialstate, {type,payload}) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}