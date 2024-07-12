import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export function Form() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { login, authInfo } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(values);
  };

  return (
    <div>
      <h1>Formulario simple</h1>
      <form onSubmit={handleSubmit}>
        {/* username   */}
        <div>
          <label>
            Nombre de Usuario:
            <input
              type="text"
              onChange={handleChange}
              id="username"
              name="username"
            />
          </label>
        </div>
        {/* password   */}
        <div>
          <label>
            Password:
            <input
              type="text"
              onChange={handleChange}
              id="password"
              name="password"
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
