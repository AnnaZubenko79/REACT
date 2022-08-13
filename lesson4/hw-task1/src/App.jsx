import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'New York'} offset={-5} />
      <Clock location={'Kiyv'} offset={0} />
      <Clock location={'London'} offset={3} />
    </>
  );
};

export default App;
