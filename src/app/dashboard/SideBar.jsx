'use client';
import NavLink from '@/components/NavLink';
import Link from 'next/link';
import React from 'react';

const navLinks = [
    {
        path: '/',
        title: 'Dashboard',
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product',
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product',
    },
    {
        path: '/',
        title: 'Home',
    },

]

const SideBar = () => {
    return (
        <aside className='mr-12'>
            <h1 className='text-4xl font-semibold'>Dashboard</h1>
            <ul>
                {
                    navLinks.map(({ path, title }) => (<li key={path}>
                        <NavLink exact activeClassName='text-blue-500' href={path}> {title}</NavLink>
                    </li>))
                }
            </ul>
        </aside>
    );
};

export default SideBar;