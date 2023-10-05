import Link from 'next/link';
import React from 'react';

const Products = ({ product }) => {
    const { id, title, price } = product;
    return (
        <div className=''>
            <Link href={`/products/${id}`}><h1>{title}</h1></Link>
        </div>
    );
};

export default Products;