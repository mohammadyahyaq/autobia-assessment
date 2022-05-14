import React from 'react';

interface Props {
    id: string;
    title: string;
}

export const CustomCheckbox: React.FC<Props> = ({ id, title }) => {
    return (
        <div className='flex-x yp-1'>
            <input className='customCheckbox' type="checkbox" id={id} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}