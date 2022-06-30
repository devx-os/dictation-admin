import React from 'react';
import pages from "../../pages";
import {Link, useLocation} from "react-router-dom";
import {useReadPostTypes} from "../../services/postType/hooks";
import {ROUTE} from "../../types";

const Sidebar = () => {

    const location = useLocation()
    const { data: postTypesData } = useReadPostTypes()

    return (
        <nav className='card bg-base-200 flex flex-col h-full min-w-max'>
            <ul className='card-body menu menu-compact rounded-box p-2'>
                {pages.filter(p => p.sidebar && p.icon).map((r, i) => <li key={`${r.title}-${i}`}>
                        <Link className={location.pathname === r.url ? 'active' : ''} to={r.url}>
                            <>
                                {r.icon && React.createElement(r.icon)}
                                {r.title}
                            </>
                        </Link>
                    </li>
                )}
                <li className="menu-title">
                    <span>Types</span>
                </li>
                {
                    postTypesData?.data?.length > 0 && postTypesData.data.map((t: any,i: number) => {
                        const pageItem = pages.find(p => p.url === `/types/${t.slug}`)
                    if (pageItem) {
                        return <li key={`${pageItem.title}-${i}`}>
                            <Link className={location.pathname === pageItem.url ? 'active' : ''} to={pageItem.url}>
                                {pageItem.icon && React.createElement(pageItem.icon)}
                                {pageItem.title}
                            </Link>
                        </li>
                    }
                    return null
                    })
                }
                <li className="menu-title">
                    <span>Settings</span>
                </li>
                <li>
                    <Link className={location.pathname ===ROUTE.SETTINGS_GENERAL ? 'active' : ''} to={ROUTE.SETTINGS_GENERAL}>
                        General
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname === ROUTE.SETTINGS_TYPES ? 'active' : ''} to={ROUTE.SETTINGS_TYPES}>
                        Types
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;