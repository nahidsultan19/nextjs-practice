'use client';

const Template = ({ children }) => {
    console.log('from template');
    return (
        <div>
            <button>BTN</button>
            {children}
        </div>
    );
};

export default Template;