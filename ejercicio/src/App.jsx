import React, { useState } from "react";
import "./App.css";
import EventForm from "./components/eventosForm/EventosForm";
import EventList from "./components/eventList/EventList";

function App() {
  const [eventos, setEventos] = useState([]);

  const agregarEvento = (evento) => {
    setEventos([...eventos, evento]);
  };

  return (
    <div className="App">
      <h1>Registro de Eventos</h1>
      <EventForm agregarEvento={agregarEvento} />
      <EventList eventos={eventos} />
    </div>
  );
}

export default App;
