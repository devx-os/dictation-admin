import * as React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({children}: LayoutProps) => {
    return (<>
            <Header/>
            <div className='flex flex-row space-x-2 h-full flex-grow'>
                <Sidebar/>
                <Main>{children}</Main>
            </div>
            <Footer/>
        </>
    );
};

export default React.memo(Layout);