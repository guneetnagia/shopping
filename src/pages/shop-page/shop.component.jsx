import React from 'react';
import { SHOP_DATA } from '../../Data/SHOP_DATA';
import { CollectionPreview } from '../Collection-page/Collection-preview';

export const ShopPage = props => {
    //const { title } = props.match.params;
    return (
        <div className="shop-page">
            {
                SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}