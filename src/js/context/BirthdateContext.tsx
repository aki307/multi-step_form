import React, { createContext, useState, ReactNode } from 'react';

export interface Birthdate {
  year: number;
  month: number;
  day: number;
}

interface BirthdateContextType {
  birthdate: Birthdate;
  setBirthdate: (date: string) => void;
}

const defaultBirthdate = {
  year: new Date().getFullYear(),
  month: 1,
  day: 1,
};

const BirthdateContext = createContext<BirthdateContextType>({
  birthdate: defaultBirthdate,
  setBirthdate: () => { },
});

export const BirthdateProvider = ({ children }: { children: ReactNode }) => {
  const [birthdate, setBirthdateState] = useState<Birthdate>(defaultBirthdate);

  console.log('BirthdateProvider rendering', { birthdate });

  const handleSetBirthdate = (date: string) => {
    const [year, month, day] = date.split('-').map(num => parseInt(num));
    const newBirthdate = new Date(year, month - 1, day);
    console.log('setBirthdate called with:', { year, month, day }, 'Date object:', newBirthdate);
    setBirthdateState({
      year: newBirthdate.getFullYear(),
      month: newBirthdate.getMonth() + 1,
      day: newBirthdate.getDate(),
    });
  };

  return (
    <BirthdateContext.Provider value={{ birthdate, setBirthdate: handleSetBirthdate }}>
      {children}
    </BirthdateContext.Provider>
  );
};

export default BirthdateContext;

