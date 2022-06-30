import * as React from 'react';
import Router from "./Router";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from "react-toastify";
import {useGlobalLoader} from "./hooks/useGlobalLoader";
import 'react-toastify/dist/ReactToastify.css';

const queryClientConfig = {
    defaultOptions: {
        queryCache: {
            retry: 2,
            staleTime: 1000 * 30,// 30seconds
            cacheTime: 1000 * 30, //30 seconds
            refetchOnMount: "always",
            refetchOnWindowFocus: false,
            refetchOnReconnect: "always",
            refetchInterval: 1000 * 30, //30 seconds
            refetchIntervalInBackground: false,
            suspense: false,
        },
        mutations: {
            retry: 2,
        },
    }
}

const queryClient = new QueryClient(queryClientConfig)

const App = () => {
    const {stop} = useGlobalLoader()
    React.useEffect(stop, [])
    return (<QueryClientProvider client={queryClient}>
            <Router/>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </QueryClientProvider>
    )
}

export default App;
