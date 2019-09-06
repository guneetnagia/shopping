import React from 'react';

export const CollectionItem = (props) => {
    const {title,items,id} = props;
    return (
                         <div className="collection-item" key={id}>
                            <h2>{title}</h2>
                            {
                                items.map((item, idx) => (
                                    <div key={item.id}>{item.name}</div>
                                ))
                            }

                        </div>
    )
}
