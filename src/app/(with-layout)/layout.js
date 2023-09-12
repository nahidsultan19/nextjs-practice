import Link from 'next/link';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout; 