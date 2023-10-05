import Link from 'next/link';
import React from 'react';

const SingleCategory = ({ category }) => {
    const { id, name } = category;
    return (
        <div className='container mx-auto'>
            <Link href={`/products?categoryId=${id}`}>
                <h1>{name}</h1>
            </Link>
        </div>
    );
};

export default SingleCategory;