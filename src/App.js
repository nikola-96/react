import React from 'react';
import './App.css';
import Greet from './components/FirstPart/Greet';
import Welcome from './components/FirstPart/Welcome';
import Hello from './components/FirstPart/Hello'
import Message from './components/FirstPart/Message'
import Counter from './components/FirstPart/Counter'
import ClickFunction from './components/FirstPart/ClickFunction'
import ClickClass from './components/FirstPart/ClickClass'
import EventBind from './components/FirstPart/EventBind'
import ParentComp from './components/FirstPart/ParentComp'
import UserGreeting from './components/FirstPart/UserGreeting'
import NameList from './components/FirstPart/NameList'
import Form from './components/FirstPart/Form'
import Table from './components/Table'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import HoverCounter from './components/HoverCounter'
import ClickCounter from './components/ClickCounter'

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
      {/* <Counter /> */}
      {/* <ClickFunction /> */}
      {/* <ClickClass /> */}
      {/* <EventBind /> */}
      {/* <ParentComp /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <Table /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <HoverCounter name="Nikola" />
      <ClickCounter />

    </div>
  );
}

export default App;
