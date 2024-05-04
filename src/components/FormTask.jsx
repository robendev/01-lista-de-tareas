import React from "react";

function FormTask({ valuesForm, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-5">
      <h1 className="mb-5 text-center font-medium text-4xl">
        Agrega tus <span className="text-indigo-500 font-bold">tareas</span>
      </h1>
      <div className="mb-4">
        <label htmlFor="titulo" className="block text-xl font-bold mb-2">
          Titulo de la tarea
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          onChange={handleChange}
          value={valuesForm.titulo}
          className="w-full bg-slate-50 border border-gray-400 p-2 rounded-lg focus:outline-none hover:bg-slate-100"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-xl font-bold mb-2">
          Descripción de la tarea
        </label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          value={valuesForm.descripcion}
          className="w-full bg-slate-50 border border-gray-400 p-2 rounded-lg focus:outline-none hover:bg-slate-100"
        />
      </div>

      <input
        type="submit"
        value="Crear Tarea"
        className="w-full py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 uppercase text-white font-bold text-xl"
      />
    </form>
  );
}

export default FormTask;
