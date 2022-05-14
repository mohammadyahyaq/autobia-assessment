import React from 'react';
import { CustomDraggable } from './ReactDnDFacade';

interface Props {
    index: number;
    cardId: string;
    icon: string;
    title: string;
    isSelected: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuCard: React.FC<Props> = ({ index, cardId, icon, title, isSelected, onClick }) => {

    return (
        // build the card and make it draggable using the Facade class
        <CustomDraggable index={index}>
                <button className={`menu-button ${isSelected && 'selected'}`} onClick={onClick}>
                    <img src={`${icon}${isSelected ? '_selected' : ''}.svg`} alt={title} />
                    <p className='menu-title'>{title}</p>
                </button>
        </CustomDraggable>
    );
}