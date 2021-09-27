import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Hello my friend ! I'm container, you are inside me !
      </h1>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
