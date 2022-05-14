import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';

// This is basically a Facade class which is used to hide some of the complexities in the 'react-beautiful-dnd' api (Facade design pattern)
interface Props {
    children: JSX.Element | JSX.Element[];
    cardsDetails: { id: string, icon: string, title: string }[];
    setCardDetails: React.Dispatch<React.SetStateAction<{
        id: string;
        icon: string;
        title: string;
    }[]>>;
}

export const CustomDropContext: React.FC<Props> = ({ cardsDetails, setCardDetails, children }) => {
    const id = v4();
    return (
        <DragDropContext onDragEnd={(result) => {
            // this function will handle the drag event
            // ========================================================
            // if the element dragged out side the menu do nothing
            if (!result.destination) return;

            const items = Array.from(cardsDetails);
            // pop the source element of the array
            const [reorderedItem] = items.splice(result.source.index, 1);
            // push it to the destination index
            items.splice(result.destination.index, 0, reorderedItem);

            // update the hook
            setCardDetails(items);
        }}>
            {/* Droppable is the place where you could drop the dragged element in (the whole menu) */}
            <Droppable key={id} droppableId={id}>
                {(provided) => (
                    <ul className='menu-list' {...provided.droppableProps} ref={provided.innerRef}>
                        {children}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export const CustomDraggable: React.FC<{ index: number, children: JSX.Element }> = ({ index, children }) => {
    const id = v4();
    return (
        // the key and draggableId should be the same (otherwise, you might get an error)
        <Draggable key={id} index={index} draggableId={id}>
            {(provided) => (
                <li className='flex-x xp-3 yp-2' {...provided.draggableProps} ref={provided.innerRef}>
                    {children}
                    <div className='auto-right' {...provided.dragHandleProps}>
                        <img src="images/grip-vertical.svg" alt="drag handle" />
                    </div>
                </li>
            )}
        </Draggable>
    );
}