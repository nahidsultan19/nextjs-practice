import React from 'react';

const SingleBlog = ({ params }) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            <h2>Blog {year || new Date().getFullYear()} for {id}</h2>
        </div>
    );
};

export default SingleBlog;