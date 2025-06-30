import React, { useState } from "react";

function Checkform() {
  const SomeTask = [
    { id: 1, title: "Prepare Monthly Financial Report" },
    { id: 2, title: "Design New Marketing Campaign" },
    { id: 3, title: "Analyze Customer Feedback" },
    { id: 4, title: "Update Website Content" },
    { id: 5, title: "Conduct Market Research" },
  ];

  const [checkedTasks, setCheckedTasks] = useState({});

  const toggleTask = (id) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <form className="max-w-xl mx-auto mt-1   rounded">
      <ul>
        {SomeTask.map((task) => (
          <li
            key={task.id}
            className="p-1 flex items-center gap-3 sm:py-3 tablet:py-3 desktop:py-3 xll:py-4 biglap:py-7 border-b border-dotted font-Roboto"
          >
            <input
              type="checkbox"
              checked={!!checkedTasks[task.id]}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 accent-green-600 cursor-pointer"
            />
            <span
              className={` ${
                checkedTasks[task.id] ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Checkform;
