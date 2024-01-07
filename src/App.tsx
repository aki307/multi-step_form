import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './js/pages/First';
import Second from './js/pages/Second';
import Third from './js/pages/Third';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
