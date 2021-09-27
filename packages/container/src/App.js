import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Hello world ! I'm container, you are inside me ! And I'm not crazy !
      </h1>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
