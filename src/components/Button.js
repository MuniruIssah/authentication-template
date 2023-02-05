import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button {...rest} className={"w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all ease-in-out hover:scale-105"}>
            {children}
        </button>
    );
};

export default Button;