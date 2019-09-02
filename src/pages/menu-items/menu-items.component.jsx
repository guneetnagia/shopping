import React from 'react';
import './menu-items-styles.scss';

export const MenuItem = ({title,imageUrl,size}) => {
    return (
        <div className={`menu-item ${size}`}>

            <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}} />

            <div className="contents">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}
