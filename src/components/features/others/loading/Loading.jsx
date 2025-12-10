import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
                <p className='mt-4 text-lg font-medium'>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;