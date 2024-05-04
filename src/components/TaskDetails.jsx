function TaskDetails({ task, completedTask }) {
  return (
    <tr className="border-b">
      <td className="p-5 text-sm text-gray-800">{task.titulo}</td>
      <td className="p-5 text-sm text-gray-800">{task.descripcion}</td>
      <td className="p-5 text-sm text-gray-800">
        <button
          className="py-2 px-3 bg-green-500 text-white uppercase font-medium rounded-lg hover:bg-green-600"
          onClick={() => {
            if (confirm("¿Deseas finalizar esta tarea?")) {
              completedTask(task.titulo);
            }
          }}
        >
          Completar
        </button>
      </td>
    </tr>
  );
}

export default TaskDetails;
