import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { GenderProvider } from './context/GenderContext';
import { BirthdateProvider } from './context/BirthdateContext';
import { InsuranceProvider } from './context/InsuranceContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GenderProvider>
      <BirthdateProvider>
        <InsuranceProvider>
          <App />
        </InsuranceProvider>
      </BirthdateProvider>
    </GenderProvider>
  </React.StrictMode>
);
