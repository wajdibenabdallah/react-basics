import React from 'react';

import Summary from './Summary';
import Meals from './Meals';

const Menu = () => {
  return (
    <React.Fragment>
      <Summary />
      <Meals />
    </React.Fragment>
  );
};

export default Menu;