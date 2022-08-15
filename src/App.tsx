import { useState } from 'react';

import { AppRoutes } from './appRoutes';
import { GlobalStyle } from './globalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}
