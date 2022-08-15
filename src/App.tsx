import { useState } from 'react';

import { AppRoutes } from './appRoutes';

import { Navbar } from './components/Navbar';
import { GlobalStyle } from './globalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppRoutes />
    </>
  )
}
