import { useState, useEffect } from "react";
import { useTipos } from "../../hooks/useTipos";
import { DangerButton, SuccessButton } from "../../../../components/Buttons";
import { InputText } from "primereact/inputtext";
import { ErrorInputForm } from "../ErrorInputForm";

export function FormTipo({ closeModalHandler, setRows, mostrarMensaje, tipo }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({ name: "" });
  const { saveTipo, getAllTipos, updateTipo } = useTipos();

  useEffect(() => {
    if (tipo) {
      setFormData((prevData) => ({
        ...prevData,
        name: tipo.name,
      }));
    }
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    let response = undefined;
    if (tipo) {
      response = await updateTipo(tipo.id, formData);
    } else {
      response = await saveTipo(formData);
    }

    if (response.status) {
      const data = await getAllTipos();
      setRows(data);
      closeModalHandler();
      mostrarMensaje({
        tipo: "success",
        titulo: "Informacion",
        detalle: `El tipo de ingrediente se ${
          tipo ? "actualizo" : "agrego"
        } con exito`,
      });
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
      <form onSubmit={handleSubmit}>
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
            placeholder="Buscar"
          />
          <ErrorInputForm errors={errors} field="name" />
        </div>
        <div className="flex my-2 mt-20 items-center justify-around">
          <SuccessButton>{tipo ? "Actualizar" : "Guardar"}</SuccessButton>
          <DangerButton clickHandler={closeModalHandler}>Cancelar</DangerButton>
        </div>
      </form>
    </div>
  );
}
