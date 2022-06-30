import React from 'react';
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderLeft from "./PageHeaderLeft";
import PageHeaderRight from "./PageHeaderRight";
import PageHeaderIcon from "./PageHeaderIcon";

const PageHeader = ({children, className = ''}: PageHeaderProps) => {

    const renderChildrensHandler = (compName: string, props?: any) => {
        return React.Children.map(children, (child) => {
            if (child.type === PageHeaderIcon && compName === 'PageHeaderIcon') {
                return React.cloneElement(child, {...child.props, ...props});
            }
            if (child.type === PageHeaderTitle && compName === 'PageHeaderTitle') {
                return React.cloneElement(child, {...child.props, ...props});
            }
            if (child.type === PageHeaderLeft && compName === 'PageHeaderLeft') {
                return React.cloneElement(child, {...child.props, ...props});
            }
            if (child.type === PageHeaderRight && compName === 'PageHeaderRight') {
                return React.cloneElement(child, {...child.props, ...props});
            }
        });
    };

    return (
        <div className={`w-full mb-4 flex items-center justify-between ${className}`}>
            <div className='flex items-center space-x-3 flex-grow md:flex-grow-0'>
                {renderChildrensHandler('PageHeaderIcon')}
                {renderChildrensHandler('PageHeaderTitle')}
            </div>
            <div className='flex items-center space-x-3 '>
                {renderChildrensHandler('PageHeaderLeft')}
                {renderChildrensHandler('PageHeaderRight')}
            </div>
        </div>
    );
};

PageHeader.Icon = PageHeaderIcon
PageHeader.Title = PageHeaderTitle
PageHeader.Left = PageHeaderLeft
PageHeader.Right = PageHeaderRight

export default PageHeader;