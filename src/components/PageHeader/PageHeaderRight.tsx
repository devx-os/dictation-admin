import React from 'react';

const PageHeaderRight = ({children, className = ''}: PageHeaderRightProps) => {
    return (
        <div className={`flex-responsive ${className}`}>
            {children}
        </div>
    );
};

export default PageHeaderRight;