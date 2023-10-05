import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories();
    return (
        <div className='container mx-auto'>
            {
                categories.map((category) => <SingleCategory category={category} key={category.id} />)
            }
        </div>
    );
};

export default Categories;