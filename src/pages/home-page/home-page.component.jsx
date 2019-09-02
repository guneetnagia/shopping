import React from 'react';
import './home-page-styles.scss';
import Directory from '../directory/directory.component';

export const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}