import * as React from 'react';
import {UseLoaderResult} from "./types";

const useGlobalLoader = (): UseLoaderResult => {
    const loader = document.querySelector('.loader');
    const start = React.useCallback(() => loader?.classList.remove('loader--hide'), []);
    const stop = React.useCallback(() => loader?.classList.add('loader--hide'), []);
    const loading = React.useCallback(() => !loader?.classList.contains('loader--hide'), []);

    const withLoadingRequest = async (req: Promise<any>) => {
        start()
        const res = await (await req)()
        stop()
        return res
    }

    return React.useMemo(() => {
        return {start, stop, withLoadingRequest}
    },[loading])
};

export default useGlobalLoader;
