import React from 'react';
import Routes from './Routes';
import {ContextProvider} from './ContextProvider';

const Providers = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default Providers;