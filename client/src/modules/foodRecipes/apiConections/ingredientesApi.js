import { API_PORT } from "../../../config/constants.js";
const ROUTE = "/ingredientes";
const URI = `http://localhost:${API_PORT}/api${ROUTE}`;

export const getAllIngredientesApi = async () => {
  const ingredientes = await fetch(`${URI}`);
  const ingredientesJson = await ingredientes.json();
  return ingredientesJson;
};

export const saveIngredienteApi = async (data) => {
  const reponse = await fetch(`${URI}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const reponseJson = reponse.json();
  return reponseJson;
};

// export const updateTiposApi = async (id, data) => {
//   const reponse = await fetch(`${URI}/${id}`, {
//     method: "PUT",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });

//   const reponseJson = reponse.json();
//   return reponseJson;
// };

export const destroyIngredienteApi = async (id) => {
  const reponse = await fetch(`${URI}/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  const reponseJson = await reponse.json();
  return reponseJson;
};
