import React from 'react';
import {Link, useLocation} from "react-router-dom";
import pages from "../../pages";

const Breadcrumb = ({className = ''}: BreadcrumbProps) => {
    const location = useLocation()
    const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbItem[]>([])

    const generateBreadcrumb = () => {
        const locationPathsArray = location.pathname.split('/')
        const breadcrumbsArray: BreadcrumbItem[] = []

        let temp = ''
        for (let i = 0; i < locationPathsArray.length; i++) {
            const locationPathsItem = locationPathsArray[i]
            const breadcrumbItem = pages.find((p) => {
                if (locationPathsItem) {
                    if (temp) {
                        return p.url === `${temp}/${locationPathsItem}`
                    }
                    return p.url === `/${locationPathsItem}`
                } else {
                    return p.url === '/dashboard'
                }
            })
            if (breadcrumbItem) {
                const {title, url, icon, ...rest} = breadcrumbItem
                const existing = breadcrumbsArray.find(b => b.url === url)
                if (!existing) breadcrumbsArray.push({title, url, icon})
                temp = ''
            } else {
                temp = `/${locationPathsItem}`
            }
        }
        setBreadcrumbs(breadcrumbsArray)
    }

    React.useEffect(() => {
        generateBreadcrumb()
    }, [location.pathname])

    return (
        <div className={`text-sm breadcrumbs ${className}`}>
            <ul>
                {breadcrumbs?.length > 0 && breadcrumbs.map((b,i) => (
                    <li className='label-text' key={`${b.title}-${i}`}>
                        <Link to={b.url}>
                            {b.icon && React.createElement(b.icon, {className: 'mr-1'})}
                            {b.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;