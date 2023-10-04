import loadBlogsData from '@/utils/loadBlogsData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);
    return {
        title: title,
    };
};

// for static 
export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();
    return blogs.map(({ id }) => ({
        id: id.toString(),
    }));
};

const SingleBlog = async ({ params }) => {
    const { id, title, body } = await loadSingleBlogData(params.id)

    return (
        <div className='container mx-auto mt-2 border border-yellow-500 p-2'>
            <h2>{id} - {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default SingleBlog;