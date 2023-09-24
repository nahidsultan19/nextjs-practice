import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs',
    description: 'next app',
};

const blogs = [
    {
        id: 1,
        year: 2017,
        title: 'title 1'
    },
    {
        id: 2,
        year: 2018,
        title: 'title 2'
    },
    {
        id: 3,
        year: 2018,
        title: 'title 3'
    },
    {
        id: 4,
        year: 2018,
        title: 'title 4'
    },
]

const BlogsPage = () => {
    return (
        <div className='container mx-auto'>
            <h2>Blogs page</h2>
            {
                blogs.map(({ id, year, title }) => (<Link className='block border border-blue-700 p-2 my-2' href={`/blogs/${year}/${id}`} key={id}>{title}</Link>))
            }
        </div>
    );
};

export default BlogsPage;