import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Messages } from "primereact/messages";

import { useTipos } from "../../hooks/useTipos";
import { useIngredientes } from "../../hooks/useIngredientes";
import {
  LinkDangerButton,
  SuccessButton,
} from "../../../../components/Buttons";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { ErrorInputForm } from "../ErrorInputForm";

export function FormIngrediente({ ingrediente }) {
  const navigate = useNavigate();
  const messages = useRef(null);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({ name: "", types: [] });
  const [tipos, setTipos] = useState([]);
  const { getAllTipos } = useTipos();
  const { saveIngrediente } = useIngredientes();

  useEffect(() => {
    const loadData = async () => {
      const response = await getAllTipos();
      setTipos(response);
    };
    loadData();
    if (ingrediente) {
      setFormData((prevData) => ({
        ...prevData,
        name: ingrediente.name,
      }));
    }
  }, []);

  //componentes
  const ListaTipos = () => {
    return (
      <div>
        <h2>Tipos</h2>
        <span>mostrar los tipo a los que pertenese el ingrediente</span>
      </div>
    );
  };

  //funciones
  //====>mensajes
  const mostrarMensaje = ({ tipo, titulo, detalle }) => {
    messages.current.show({
      severity: tipo, // Puedes usar 'success', 'warn', 'error', etc.
      summary: titulo,
      detail: detalle,
      closable: false,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let response = undefined;
    if (ingrediente) {
      // response = await updateTipo(ingrediente.id, formData);
    } else {
      response = await saveIngrediente(formData);
    }

    if (response.status) {
      const data = await getAllTipos();
      mostrarMensaje({
        tipo: "success",
        titulo: "Informacion",
        detalle: `El ingrediente se ${
          ingrediente ? "actualizo" : "agrego"
        } con exito`,
      });
      setTimeout(() => {
        navigate("/ingredientes");
      }, 3000);
    } else if (response.errors) {
      setErrors(response.errors);
    }
  }

  function handleChangeinput(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="p-5 w-1/2 mx-auto bg-black bg-opacity-65 rounded-xl">
      {/* Mensajes */}
      <Messages ref={messages} />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5">
            {/* name */}
            <div className="flex flex-col my-2">
              <label
                className="text-center text-xl text-gray-200 font-bold mb-3"
                htmlFor="name"
              >
                Nombre:
              </label>
              <InputText
                name="name"
                className="w-1/2 text-center mx-auto py-1 border border-blue-200 rounded-full"
                value={formData.name}
                onChange={handleChangeinput}
                placeholder="Indique el nombre del nuevo ingrediente"
              />
              <ErrorInputForm errors={errors} field="name" />
            </div>
            {/* tipos */}
            <div className="flex flex-col my-2">
              <label
                className="text-center text-xl text-gray-200 font-bold mb-3"
                htmlFor="name"
              >
                Tipo de ingrediente:
              </label>
              <MultiSelect
                value={formData.types}
                onChange={handleChangeinput}
                options={tipos}
                optionLabel="name"
                filter
                name="types"
                placeholder="Indique el tipo/s del ingrediente"
                maxSelectedLabels={3}
                className="w-full md:w-20rem rounded-full"
              />
            </div>
            {/* buttons */}
            <div className="flex mt-10 items-center justify-around">
              <SuccessButton>
                {ingrediente ? "Actualizar" : "Guardar"}
              </SuccessButton>
              <LinkDangerButton to="/ingredientes">Volver</LinkDangerButton>
            </div>
          </div>
        </form>
      </div>
      {ingrediente && (
        <div>
          <ListaTipos />
        </div>
      )}
    </div>
  );
}
