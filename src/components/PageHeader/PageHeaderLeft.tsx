import React from 'react';

const PageHeaderLeft = ({children, className = ''}: PageHeaderLeftProps) => {
    return (
        <div className={`flex-responsive ${className}`}>
            {children}
        </div>
    );
};

export default PageHeaderLeft;