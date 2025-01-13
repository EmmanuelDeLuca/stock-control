import React from 'react';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { ProductCard } from './components/ProductCard/ProductCard';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <ProductCard/>
    </div>
  );
}

export default App;
