import React from 'react';
import { Content } from '../Content/Content';
import { Menu } from '../Menu/Menu';

export const PageContent: React.FC = () => {
    return (
        <div className="page-content flex-x fx-to-end">
            <Menu />
            <Content />
        </div>
    );
}