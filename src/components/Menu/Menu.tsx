import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { reducersType } from '../../reducers';
import { MenuCard } from './MenuCard';
import { CustomDropContext } from './ReactDnDFacade';


export const Menu: React.FC = () => {
    const firstId = useMemo<string>(() => v4(), []);
    const [selectedCard, setSelectedCard] = useState<string>(firstId);
    const menuState = useSelector<reducersType, boolean>(state => state.menu);

    // I will store all the cards details inside an array
    const initialArray = useMemo<{ id: string, icon: string, title: string }[]>(() => {
        return ([
            { id: firstId, icon: 'images/Home', title: 'Home' },
            { id: v4(), icon: 'images/Profile', title: 'Users' },
            { id: v4(), icon: 'images/Cart', title: 'Shopping' },
            { id: v4(), icon: 'images/Gear', title: 'Settings' }
        ]);
    }, []);

    const [cardsDetails, setCardDetails] = useState<{ id: string, icon: string, title: string }[]>(initialArray);

    return (
        <div className={`menu parent-height ${menuState || 'close'}`}>
            <CustomDropContext cardsDetails={cardsDetails} setCardDetails={setCardDetails}>
                {cardsDetails.map((card, index) => {
                    const { id, ...rest } = card;
                    return <MenuCard key={index.toString()} cardId={id} index={index} {...card} isSelected={selectedCard === id} onClick={e => setSelectedCard(id)} />
                })}
            </CustomDropContext>
        </div>
    );
}