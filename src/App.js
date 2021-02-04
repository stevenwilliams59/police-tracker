import './App.css';
import Title from './components/Title';

import React from 'react';
import FetchCrimes from './components/FetchCrimes';

export default function App() {
  return (
    <div>
      <Title />
      <FetchCrimes />
    </div>
  );
}
