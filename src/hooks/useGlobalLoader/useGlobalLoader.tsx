import * as React from 'react';
import {UseLoaderResult} from "./types";

const useGlobalLoader = (): UseLoaderResult => {
    const loader = document.querySelector('.loader');
    const start = () => loader?.classList.remove('loader--hide');
    const stop = () => loader?.classList.add('loader--hide');
    return {start, stop}
};

export default useGlobalLoader;
