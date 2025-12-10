import React from 'react';
import NavBar from '../pages/navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>

            <NavBar />
            </header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <footer>

            <Footer />
            </footer>
        </div>
    );
};

export default Root;