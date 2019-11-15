import React from 'react';

const authContext = React.createContext({
  plantsAdded: [],
  fetchPlants: () => {}
});

export default authContext;
