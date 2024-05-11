
import React from "react";
import "./eventList.css";

function EventList({ eventos }) {
  return (
    <div>
      <h2>Eventos Registrados</h2>
      {eventos.length === 0 ? (
        <p>No hay eventos registrados</p>
      ) : (
        <div className="card-container">
          {eventos.map((evento, index) => (
            <div className="card" key={index}>
              <h3>{evento.nombre}</h3>
              <p>Fecha: {evento.fecha}</p>
              <p>Ubicación: {evento.ubicacion}</p>
              <p>Descripción: {evento.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventList;
