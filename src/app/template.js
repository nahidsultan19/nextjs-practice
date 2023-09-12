'use client';

const Template = ({ children }) => {
    console.log('from template');
    return (
        <div>
            {children}
        </div>
    );
};

export default Template;