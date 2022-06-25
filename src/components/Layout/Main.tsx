import * as React from 'react';

type MainProps = {
    children: React.ReactElement
}

const Main = ({ children }: MainProps) => {
    return (
        <main className='flex-grow card'>
            {React.cloneElement(children, {className: 'card-body'})}
        </main>
    );
};

export default Main;