import React from 'react';
import ColorsProvider from '../providers/ColorsProvider';
import DarkModeProvider from '../providers/DarkModeProvider';
import ThemeProvider from '../providers/ThemeProvider';

const AppProviders = ({children}) => {
   
    return (
            <DarkModeProvider>
                <ColorsProvider>
                        <ThemeProvider>
                            {children}
                        </ThemeProvider>
                </ColorsProvider>
            </DarkModeProvider>
)};

export default AppProviders;