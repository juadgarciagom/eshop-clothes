import { CartActionTypes } from "../constants/CartTypes";
import { addItemToCart } from "../utils/cart-utils";

//We want that the initial state is that the cart dropdown be hidden
const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //Set the hidden value to the opposite of what is, so if is visible change to hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            
    
        default:
            return state;
            
    }
    
}

export default cartReducer;