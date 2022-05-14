import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { PageContent } from '../PageContent/PageContent';

export const App: React.FC = () => {
  // this is the top lever container in this app
  return (
    <div className='flex-y full-height'>
      <Navbar />
      <PageContent />
    </div>
  );
}