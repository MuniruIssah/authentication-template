import React from 'react';

const Input = ({label,...rest}) => {
    return (
        <label className={"flex flex-col space-y-3"}>
            <span className={""}>{label}</span>
            <input {...rest} className={"border border-gray-300 rounded outline-0 p-1.5 "} />
        </label>
    );
};

export default Input;