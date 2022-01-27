import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import '../cart-dropdown/cart-dropdown.scss'

const CartDropdown = () => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Ir a pagar</CustomButton>
        </div>
    </div>;
};

export default CartDropdown;
