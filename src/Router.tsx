import React from 'react';
import pages from './pages';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {IAppPage} from "./types";
import {Layout} from "./components/Layout";
import {useIsFetching} from "react-query";
import {useGlobalLoader} from "./hooks/useGlobalLoader";

const Router = () => {
    const isFetching = useIsFetching()

    const {start, stop} = useGlobalLoader()
    React.useEffect(() => {
        isFetching ? start() : stop()
    }, [isFetching])

    const handleComponent = React.useCallback((page: IAppPage): React.ReactNode => {
        const comp = React.createElement(page.component, {})
        if (page.layout) return <Layout>
            {comp}
        </Layout>
        return comp
    }, [])

    return React.useMemo(() => (
        <BrowserRouter>
            <Routes>
                {pages.map((p, i) => <Route key={`${p.title}-${i}`} path={p.url} element={handleComponent(p)}/>)}
            </Routes>
        </BrowserRouter>
    ), [pages])
};

export default Router;