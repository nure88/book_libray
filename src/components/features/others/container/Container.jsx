import React from 'react';

const Container = ({children}) => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center'>
            {children}
        </div>
    );
};

export default Container;