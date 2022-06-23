import React from 'react';
import pages from './pages';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {IAppPage} from "./types";
import {Layout} from "./components/Layout";

const Router = () => {
    const handleComponent = (page: IAppPage): React.ReactNode => {
        const comp = React.createElement(page.component, {})
        if (page.layout) return <Layout>
            {comp}
        </Layout>
        return comp
    }

    return (
        <BrowserRouter>
            <Routes>
                {pages.map((p, i) => <Route key={`${p.name}-${i}`} path={p.url} element={handleComponent(p)}/>)}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;