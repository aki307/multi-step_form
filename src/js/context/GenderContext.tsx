import React, { createContext, useState, ReactNode } from 'react';

interface GenderContextType {
  gender: string;
  setGender: (gender: string) => void;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider = ({ children }: { children: ReactNode }) => {
  const [gender, setGender] = useState('');

  console.log('GenderProvider rendering', { gender });

  const handleSetGender = (newGender: string) => {
    console.log('setGender called with:', newGender);
    setGender(newGender);
  };

  return (
    <GenderContext.Provider value={{ gender, setGender: handleSetGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export default GenderContext;

