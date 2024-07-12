import React, { useState, useEffect, useRef } from "react";
import {
  InfoButton,
  PurpleButton,
  DangerButton,
  WarningButton,
  SuccessButton,
} from "../../../../components/Buttons";
import { Messages } from "primereact/messages";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/luna-amber/theme.css";
import "primereact/resources/primereact.min.css";
import { useTipos } from "../../hooks/useTipos";
import "primeicons/primeicons.css";
import { FormTipo } from "../tipos/FormTipo";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { Button } from "primereact/button";

export function TiposTable() {
  const messages = useRef(null);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  //data states
  const [rows, setRows] = useState(null);
  const [tipo, setTipo] = useState(undefined);
  //modals states
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  //custom hooks
  const { getAllTipos, destroyTipo } = useTipos();

  //====>carga data al rendnerixar la pagina
  useEffect(() => {
    async function fetchData() {
      const data = await getAllTipos();
      setRows(data);
    }
    fetchData();
    setLoading(false);
    initFilters();
  }, []);

  //====>cabecera de tabla
  const header = () => {
    return (
      <div className="flex justify-between">
        <div className="mx-5">
          <InfoButton clickHandler={() => handleFormModalOpen()}>
            <span className="pi pi-plus"></span>
          </InfoButton>
        </div>
        <div>
          <IconField iconPosition="left">
            {/* <InputIcon className="pi pi-search" /> */}
            <InputText
              className="py-1 border border-blue-200 text-center rounded-full"
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Buscar"
            />
          </IconField>
        </div>
        <div className="mx-5">
          <WarningButton clickHandler={initFilters}>
            <span className="pi pi-trash mr-2"></span>
            <span className="pi pi-filter"></span>
          </WarningButton>
        </div>
      </div>
    );
  };

  //====>mensajes
  const mostrarMensaje = ({ tipo, titulo, detalle }) => {
    messages.current.show({
      severity: tipo, // Puedes usar 'success', 'warn', 'error', etc.
      summary: titulo,
      detail: detalle,
      closable: false,
    });
  };

  //==========================================================================================(global search staff)

  //limpio filtro
  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  //manejador de cambios en filtro global
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const filterClearTemplate = (options) => {
    return (
      <Button
        type="button"
        icon="pi pi-times"
        onClick={options.filterClearCallback}
        severity="primary"
      ></Button>
    );
  };

  const filterApplyTemplate = (options) => {
    return (
      <Button
        type="button"
        icon="pi pi-check"
        onClick={options.filterApplyCallback}
        severity="success"
      ></Button>
    );
  };

  const filterFooterTemplate = () => {
    return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
  };

  //==========================================================================================(add/del/edit)

  //============================>add/edit
  // modal handler
  const handleFormModalOpen = (rowData) => {
    rowData ? setTipo(rowData) : undefined;
    setShowModalForm(true);
  };

  const handleFormModalClose = () => {
    setTipo(undefined);
    setShowModalForm(false);
  };

  //modal body
  const ModalForm = () => {
    return (
      <>
        {showModalForm && (
          <div className="backdrop-blur fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-1/2 rounded-xl bg-black bg-opacity-50 h-1/2 flex flex-col justify-around items-center">
              <FormTipo
                closeModalHandler={handleFormModalClose}
                tipo={tipo}
                setRows={setRows}
                mostrarMensaje={mostrarMensaje}
              />
            </div>
          </div>
        )}
      </>
    );
  };

  //============================>Eliminar
  // modal handler
  const handleEliminarModalOpen = (rowData) => {
    setTipo(rowData);
    setShowModalEliminar(true);
  };

  const handleEliminarModalClose = () => {
    setShowModalEliminar(false);
    setTipo(undefined);
  };

  //modal body
  const ModalEliminar = () => {
    return (
      <>
        {showModalEliminar && (
          <div className="backdrop-blur fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-1/2 rounded-xl bg-black bg-opacity-50 h-1/2 flex flex-col justify-around items-center">
              <section className="px-4 text-center">
                <span className="text-xl">
                  Esta seguro de elimiar el tipo de ingrediente: {tipo.name}
                </span>
              </section>
              <section className="flex gap-10">
                <div>
                  <DangerButton
                    clickHandler={() => deleteItemClikcHandler(tipo)}
                  >
                    Elimiar
                  </DangerButton>
                </div>
                <div>
                  <SuccessButton clickHandler={handleEliminarModalClose}>
                    Cancelar
                  </SuccessButton>
                </div>
              </section>
            </div>
          </div>
        )}
      </>
    );
  };

  //logic function
  const deleteItemClikcHandler = async (rowData) => {
    const response = await destroyTipo(rowData);
    if (response.status) {
      const data = await getAllTipos();
      setRows(data);
      handleEliminarModalClose();

      mostrarMensaje({
        tipo: "success",
        titulo: "Informacion",
        detalle: "El tipo de ingredietne se elimino con exito",
      });
    } else {
      mostrarMensaje({
        tipo: "error",
        titulo: "Informacion",
        detalle: "ocurrio un error",
      });
    }
  };

  //==========================================================================================(add/del/edit)

  //Manejadores logicos
  // const editItemClikcHandler = (rowData) => {
  //   console.log(" editar  rowData");
  // };

  //main return
  return (
    <div className="px-5">
      {/* Mensajes */}
      <Messages ref={messages} />

      {/* tabla */}
      <DataTable
        value={rows}
        paginator
        showGridlines
        rows={10}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name"]}
        header={header}
        emptyMessage="No se encontraron registros en nuestras base de datos."
      >
        <Column
          header="Nombre"
          field="name"
          filter
          filterField="name"
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
          filterClear={filterClearTemplate}
          filterApply={filterApplyTemplate}
          filterFooter={filterFooterTemplate}
          filterMenuStyle={{ width: "14rem" }}
        />
        <Column
          header="Acciones"
          body={(rowData) => (
            <div className="flex gap-x-3">
              <PurpleButton clickHandler={() => handleFormModalOpen(rowData)}>
                <span className="pi pi-pen-to-square"></span>
              </PurpleButton>
              <DangerButton
                clickHandler={() => handleEliminarModalOpen(rowData)}
              >
                <span className="pi pi-trash"></span>
              </DangerButton>
            </div>
          )}
        ></Column>
      </DataTable>

      {/* modales */}
      <ModalEliminar />
      <ModalForm />
    </div>
  );
}
