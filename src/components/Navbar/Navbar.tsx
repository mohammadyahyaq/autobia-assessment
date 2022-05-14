import React from 'react';
import { HubergerButton } from './HumbergerButton';

export const Navbar: React.FC = () => {
    return (
        <nav id='navbar' className='xp-2 yp-1'>
            <HubergerButton />
            <img id='logo' src="images/Logo.svg" alt="TAM logo" />
        </nav>
    );
}