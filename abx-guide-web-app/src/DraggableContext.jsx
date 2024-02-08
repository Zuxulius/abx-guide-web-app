import { createContext, useContext, useState } from 'react';

const DraggableContext = createContext();

export const useDraggable = () => useContext(DraggableContext);

export const DraggableProvider = ({ children }) => {
  const [isChecklistVisible, setIsChecklistVisible] = useState(false);
  const [isAllergyVisible, setIsAllergyVisible] = useState(false);

  const toggleChecklistVisibility = () => {
    setIsChecklistVisible((prev) => !prev);
  };

  const toggleAllergyVisibility = () => {
    setIsAllergyVisible((prev) => !prev);
  };

  return (
    <DraggableContext.Provider value={{ isChecklistVisible, toggleChecklistVisibility , isAllergyVisible, toggleAllergyVisibility }}>
      {children}
    </DraggableContext.Provider>
  );
};
