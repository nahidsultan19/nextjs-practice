import React from 'react';

const SingleBlog = ({ params }) => {
    return (
        <div>
            <h2>Blog {params.body}</h2>
        </div>
    );
};

export default SingleBlog;