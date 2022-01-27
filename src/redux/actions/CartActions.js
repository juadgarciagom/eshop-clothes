import { CartActionTypes } from "../constants/CartTypes";

export const setCartHidden = () => ({
    
    type: CartActionTypes.SET_CART_HIDDEN


});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})