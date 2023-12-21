import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
