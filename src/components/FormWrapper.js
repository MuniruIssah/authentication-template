import React from 'react';

const FormWrapper = ({children}) => {
    return (
        <div className={'bg-white rounded shadow-md py-10 px-6 w-[90vw] lg:w-4/12'}>
            {children}
        </div>
    );
};

export default FormWrapper;