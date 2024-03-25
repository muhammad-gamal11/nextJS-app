import DeleteForm from "@/components/DeleteForm";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const tasks = () => {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
      <DeleteForm />
    </div>
  );
};
export default tasks;
