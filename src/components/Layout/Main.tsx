import * as React from 'react';

type MainProps = {
    children: React.ReactElement
}

const Main = ({children}: MainProps) => {
    return (
        <main className='flex-grow card bg-base-200'>
            <section className='card-body w-full h-full p-4'>
                {children}
            </section>
        </main>
    );
};

export default Main;