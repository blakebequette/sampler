import React, { useContext } from 'react';

import AppProviders from './AppProviders';
import AppRouter from './AppRouter';

const Main = () => {
   
    return (
        <div>
            <AppProviders>
                <AppRouter />
            </AppProviders>
        </div>
)};

export default Main;