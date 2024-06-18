import React, { useState } from "react";

const Form = () => {

  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });

  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [error, setError] = useState("");

  let mensajeError = "Por favor verifique su información nuevamente"

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (cliente.nombre.trim().length < 5) {
      setError(mensajeError);
      setMostrarInfo(false);
    } else if (!emailPattern.test(cliente.email)) {
      setError(mensajeError);
      setMostrarInfo(false);
    } else {
      setError("");
      setMostrarInfo(true);
      console.log("Datos del cliente:", cliente);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={cliente.nombre}
          onChange={(event) =>
            setCliente({ ...cliente, nombre: event.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="text"
          value={cliente.email}
          onChange={(event) =>
            setCliente({ ...cliente, email: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h3>{error}</h3>}
      {mostrarInfo && (
        <div>
          <h3>Te contactaremos cuanto antes vía mail {cliente.nombre}</h3>
        </div>
      )}
    </div>
  );
};

export default Form;