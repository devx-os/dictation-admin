import * as React from 'react';
import Loader from './Loader';

const FullscreenLoader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black/10 z-10">
            <Loader />
        </div>
    );
};

export default FullscreenLoader;
