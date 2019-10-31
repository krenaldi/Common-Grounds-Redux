import React from 'react';

const Column = ({ children, style, className }) => {
    return (
        <div className={`col ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Column;