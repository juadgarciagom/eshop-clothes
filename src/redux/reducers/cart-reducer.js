import { CartActionTypes } from "../constants/CartTypes";

//We want that the initial state is that the cart dropdown be hidden
const INITIAL_STATE = {
    hidden:true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //Set the hidden value to the opposite of what is, so if is visible change to hidden
            }
            
    
        default:
            return state;
            
    }
}

export default cartReducer;