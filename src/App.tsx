import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppRoutes } from './appRoutes';

import { Navbar } from './components/Navbar';
import { UserContextProvider } from './contexts/user';
import { GlobalStyle } from './globalStyle';

export function App() {
  return (
    <>
      <div><Toaster /></div>
      <GlobalStyle />
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </>
  )
}
