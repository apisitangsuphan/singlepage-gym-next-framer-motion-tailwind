import React from 'react';
import Hero from './components/Hero/page';
import Equipments from './components/Equipments/page';
export default function Home() {
  return (
    <div className="container overflow-x-hiddden">
      <Hero />
      <Equipments />
    </div>
  );
}
