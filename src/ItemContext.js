// src/ItemContext.js
import React, { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

export const useItem = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </ItemContext.Provider>
  );
};
