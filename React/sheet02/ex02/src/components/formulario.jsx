import { useState } from "react";

function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="#" className="form-data">
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p>{name}</p>
      <label htmlFor="email">Correo electrónico:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{email}</p>
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p>{password}</p>
    </form>
  )
}

export default Formulario;
