import React from 'react';

const DataTags = ({ options, onClick, selected }) => {
    const pStyle = {
        fontFamily: "Arial",
        color: "#000000",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin: 2,
        fontSize: 14,
        fontWeight: "bold"
    };
    const allOptions = ["All", ...options];

    return (
        <div>
            {allOptions.map(option => {
                const extraClass = option === selected ? "selected" : "";

                return (
                    <div 
                        key={option} 
                        onClick={() => onClick(option)}
                        className={`tag ${extraClass}`}
                        title={option}>
                            <p style={pStyle}>{option}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default DataTags;