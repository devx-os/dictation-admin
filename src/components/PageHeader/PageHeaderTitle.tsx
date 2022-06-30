import React from 'react';

const PageHeaderTitle = ({children, className = ''}: PageHeaderTitleProps) => {
    return <h3 className={`page-title ${className}`}>{children}</h3>
};

export default PageHeaderTitle;