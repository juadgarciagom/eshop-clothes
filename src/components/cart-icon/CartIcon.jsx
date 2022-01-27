import React from "react";
import { connect } from "react-redux";

import { setCartHidden } from "../../redux/actions/CartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";

import '../cart-icon/cart-icon.scss'

const CartIcon = ({ setCartHidden }) => {
    return (
        <div className="cart-icon" onClick={setCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setCartHidden: () => dispatch(setCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
