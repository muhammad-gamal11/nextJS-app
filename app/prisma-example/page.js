import Prisma from "../../utils/db";

const prismaHandlers = async () => {
  await Prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await Prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const prismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">prismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
            😂
          </h2>
        );
      })}
    </div>
  );
};
export default prismaExample;
