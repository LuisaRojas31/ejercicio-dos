import React, { useState } from "react";

function EventForm({ agregarEvento }) {
  const [evento, setEvento] = useState({
    nombre: "",
    fecha: "",
    ubicacion: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento((prevEvento) => ({
      ...prevEvento,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEvento(evento);
    setEvento({
      nombre: "",
      fecha: "",
      ubicacion: "",
      descripcion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre del Evento:</label>
        <input
          type="text"
          name="nombre"
          value={evento.nombre}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          value={evento.fecha}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label>Ubicación:</label>
        <input
          type="text"
          name="ubicacion"
          value={evento.ubicacion}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={evento.descripcion}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <button type="submit" className="btn">
        Registrar Evento
      </button>
    </form>
  );
}

export default EventForm;
