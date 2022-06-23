import * as React from 'react';
import Router from "./Router";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from "react-toastify";
import {FullscreenLoader} from "./components/Loader";

const queryClient = new QueryClient()

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
