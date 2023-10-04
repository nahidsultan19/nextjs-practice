import loadBlogsData from '@/utils/loadBlogsData';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs',
    description: 'next app',
};

// const blogs = [
//     {
//         id: 1,
//         year: 2017,
//         title: 'title 1'
//     },
//     {
//         id: 2,
//         year: 2018,
//         title: 'title 2'
//     },
//     {
//         id: 3,
//         year: 2018,
//         title: 'title 3'
//     },
//     {
//         id: 4,
//         year: 2018,
//         title: 'title 4'
//     },
// ]

const BlogsPage = async () => {

    const blogs = await loadBlogsData();

    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, body, title }) => (
                    <div key={id} className='border border-blue-700 p-2 my-2'>
                        <h2>{id} - {title}</h2>
                        <Link className='inline-block m-1' href={`/blogs/${id}`}>
                            <button className='bg-gray-700 text-white px-2 py-1 rounded-md cursor-pointer'>Details</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsPage;