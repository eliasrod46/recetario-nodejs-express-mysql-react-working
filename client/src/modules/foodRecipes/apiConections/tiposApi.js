import { API_PORT } from "../../../config/constants.js";
const ROUTE = "/tipos-ingredientes";
const URI = `http://localhost:${API_PORT}/api${ROUTE}`;
// const ROUTEDASHBOARD = "/economy/dashboard";
// const URIDASHBOARD = `http://localhost:${API_PORT}/api${ROUTEDASHBOARD}`;

export const getAllTiposApi = async () => {
  const tipos = await fetch(`${URI}`);
  const tiposJson = await tipos.json();
  return tiposJson;
};

export const saveTiposApi = async (data) => {
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
  console.log(await reponseJson);
  return reponseJson; //{ message: "success, Teacher added" }
};

export const updateTiposApi = async (id, data) => {
  const reponse = await fetch(`${URI}/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const reponseJson = reponse.json();
  return reponseJson;
};

export const destroyTipoApi = async (id) => {
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
