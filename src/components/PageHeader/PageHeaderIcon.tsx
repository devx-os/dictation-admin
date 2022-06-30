import React from 'react';

const PageHeaderIcon = ({children, className = ''}: PageHeaderIconProps) => {
    return <span className={`text-xl ${className}`}>{children}</span>
};

export default PageHeaderIcon;