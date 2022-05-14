import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../actions/menuActions';
import { reducersType } from '../../reducers';

export const HubergerButton: React.FC = () => {
    const menuState = useSelector<reducersType, boolean>(state => state.menu);
    const dispatch = useDispatch();

    return (
        <button id='humbergerButton' className={`${menuState && 'close'}`} onClick={e => dispatch(toggleMenu())}>
            <div></div>
        </button>
    );
}