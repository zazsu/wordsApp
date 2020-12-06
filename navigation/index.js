/* Author: Eeva Mattila 
Student number: 1903054 */

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