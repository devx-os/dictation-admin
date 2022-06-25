import * as React from 'react';
import Router from "./Router";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from "react-toastify";
import {FullscreenLoader} from "./components/Loader";

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

function App() {
    return (
        <React.Suspense fallback={<FullscreenLoader/>}>

        <QueryClientProvider client={queryClient}>
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
        </React.Suspense>
    )
}

export default App;
