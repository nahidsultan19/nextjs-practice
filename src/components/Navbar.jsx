'use client';


import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/about',
        title: 'About',
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/blogs',
        title: 'Blogs',
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
    },

]

const Navbar = () => {
    return (
        <nav className='flex item-center justify-between container mx-auto'>
            <h1 className='text-3xl font-semibold'>Next app</h1>
            <ul className='flex item-center justify-center'>
                {
                    navLinks.map(({ path, title }) => (<li className='mx-2' key={path}>
                        <NavLink exact={path === '/'} activeClassName="text-blue-500" href={path}>{title}</NavLink>
                    </li>))
                }
            </ul>
        </nav>
    );
};

export default Navbar;