import React from 'react';

import shopData from './shop_data';

import PreviewCollection from '../../components/preview-collection/PreviewCollection';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherItems}) => (
                        <PreviewCollection key={id} {...otherItems} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;