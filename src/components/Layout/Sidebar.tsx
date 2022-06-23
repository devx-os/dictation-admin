import React from 'react';
import pages from "../../pages";

const blacklist = ['*']

const Sidebar = () => {
    return (
        <nav className='card flex flex-col bg-accent h-full'>
            <ul>
                {pages.filter(p => !blacklist.includes(p.url)).map((r,i) => <li key={`${r.name}-${i}`}>{r.name}</li>)}
            </ul>
        </nav>
    );
};

export default Sidebar;