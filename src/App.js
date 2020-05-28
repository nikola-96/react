import React from 'react';
import './App.css';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Nikola"> {/*kada smo ubacili provajdera, mozemo da deklarsemo da neko iz ove grane koristi kontekst */}
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
