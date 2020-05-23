import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Betman" >
        <p>This is a children component!</p>ovaj sadrzaj ce se izrenderovati u children klasi tako sto 
        moramo da navedemo eksplicitno props.children 
      </Greet>
      <Greet name="Klark" heroName="Superman" />
      <Greet name="Nikola" heroName="Nikola" />
      <Welcome name="Bruce" heroName="Betman" />
      <Welcome name="Klark" heroName="Superman" />
      <Welcome name="Nikola" heroName="Nikola" />
      <Hello /> */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
}

export default App;
