import { useMemo, useState } from "react";
import FormTask from "./components/FormTask";
import TasksDetails from "./components/TasksDetails";

const initialValuesForm = {
  titulo: "",
  descripcion: "",
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [valuesForm, setValuesForm] = useState(initialValuesForm);
  const handleChange = (e) => {
    setValuesForm({
      ...valuesForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(valuesForm).includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    setTasks([...tasks, valuesForm]);
    setValuesForm(initialValuesForm);
  };

  const hasTasks = useMemo(() => tasks.length, [tasks]);

  const completedTask = (titulo) => {
    const updateTasks = tasks.filter((task) => task.titulo !== titulo);
    setTasks(updateTasks);
  };
  return (
    <>
      <h1 className="text-6xl font-medium text-center m-10">
        Lista de Tareas{" "}
        <span className="text-indigo-500 font-bold">Pendientes</span>
      </h1>

      <main className="max-w-[768px] mx-auto m-5 p-5">
        <div className="max-w-[640px] mx-auto">
          <FormTask
            valuesForm={valuesForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="max-w-[640px] mx-auto bg-white shadow-sm rounded-lg mt-5 p-5">
          {hasTasks ? (
            <>
              <p className="text-indigo-500 font-bold mb-3">
                Tareas Pendientes
              </p>

              <TasksDetails tasks={tasks} completedTask={completedTask} />
            </>
          ) : (
            <>
              <p>
                No hay{" "}
                <span className="text-indigo-500 font-bold pb-2">
                  Tareas Pendientes
                </span>
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
