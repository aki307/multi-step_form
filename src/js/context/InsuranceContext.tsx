import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface InsuranceState {
  joinAnswer: boolean | null;
  hospitalizationAnswer: boolean | null;
  surgicalAnswer: boolean | null;
  consultationContent: string;
}

interface InsuranceContextType {
  state: InsuranceState;
  setJoinAnswer: (answer: boolean) => void;
  setHospitalizationAnswer: (answer: boolean) => void;
  setSurgicalAnswer: (answer: boolean) => void;
  setConsultationContent: (content: string) => void;
}



const defaultState: InsuranceState = {
  joinAnswer: null,
  hospitalizationAnswer: null,
  surgicalAnswer: null,
  consultationContent: "",
};

export const InsuranceContext = createContext<InsuranceContextType | undefined>(undefined);

export const InsuranceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setJoinAnswer = (answer: boolean) => {
    setState((prevState) => ({ ...prevState, joinAnswer: answer }));
  };

  const setHospitalizationAnswer = (answer: boolean) => {
    setState((prevState) => ({ ...prevState, hospitalizationAnswer: answer }));
  };

  const setSurgicalAnswer = (answer: boolean) => {
    setState((prevState) => ({ ...prevState, surgicalAnswer: answer }));
  };

  const setConsultationContent = (content: string) => {
    setState((prevState) => ({ ...prevState, consultationContent: content }));
  };

  const value = {
    state,
    setJoinAnswer,
    setHospitalizationAnswer,
    setSurgicalAnswer,
    setConsultationContent,
  };

  return (
    <InsuranceContext.Provider value={value}>
      {children}
    </InsuranceContext.Provider>
  );
};
