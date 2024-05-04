import TaskDetails from "./TaskDetails";

function TasksDetails({ tasks, completedTask }) {
  return (
    <div className="">
      <table className="w-full table-auto shadow-2xl">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="p-2 text-lg">Tarea</th>
            <th className="p-2 text-lg">Descripción</th>
            <th className="p-2 text-lg">Completar Tarea</th>
          </tr>
        </thead>

        <tbody>
          {tasks?.map((task, index) => (
            <TaskDetails
              key={index}
              task={task}
              completedTask={completedTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksDetails;
