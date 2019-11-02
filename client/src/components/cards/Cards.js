import React from 'react';

const Card = ({ img, href, color }) => {
    
    return (
        <div
            className="card" 
            style={{ borderRadius: 50 }} 
            onClick={() => window.location = href}
            >

        <div 
            style={{
                borderRadius: "50%",
                minHeight: 50,
                minWidth: 50, 
                background: `url("${img}") no-repeat center center / 50% ${color}`
            }}/>
        </div>    
    );
};

export default Card;