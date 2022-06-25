import React from 'react';
import pages from "../../pages";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className='card bg-base-200 flex flex-col h-full'>
            <ul className='menu menu-compact rounded-box p-2'>
                {pages.filter(p => p.sidebar && p.icon).map((r,i) => <li key={`${r.name}-${i}`}><Link to={r.url}><>{r.icon}{r.name}</></Link></li>)}
            </ul>
        </nav>
    );
};

export default Sidebar;