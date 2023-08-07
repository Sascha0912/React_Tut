import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';

import Clock from "./pages/Clock/clock";
// import MagicButton from "./pages/MagicTable/MagicButton";
import MagicTable from "./pages/MagicTable/MagicTable";
import CurrencyCalculator from './pages/CurrencyCalculator/CurrencyCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/button" element={<MagicTable />} />
        <Route path='/currency' element={<CurrencyCalculator/>} />
      </Routes>
    </Router>
  );
}

export default App;
