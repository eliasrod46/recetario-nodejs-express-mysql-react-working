import React, { useEffect, useState } from "react";

export function Form() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", values);
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
        {/* confirmPassword   */}
        <div>
          <label>
            Password:
            <input
              type="text"
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
