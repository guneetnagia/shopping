import React from 'react';
import { SHOP_DATA } from '../../Data/SHOP_DATA';
import { CollectionItem } from './Collection-Item';

export const Collection = props => {
    const { title } = props.match.params;
    return (
        <div className="collection-container">
            {
                SHOP_DATA.map(category => {
                    if (title === category.title) {
                        console.log('matching')
                        return (
                            <CollectionItem key={category.id} title={category.title} items={category.items} />
                        )
                    }
                    else {
                        console.log('show all')
                        return (
                            <CollectionItem key={category.id} title={category.title} items={category.items} />
                        )
                    }
                })
            }
        </div>
    )
}