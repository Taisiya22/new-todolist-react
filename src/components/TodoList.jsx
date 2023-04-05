import { FilterList } from "./FilterBtn/FilterList";
import { Todo } from "./Todo/Todo";
import { useState } from "react";



export const TodoList = ({ tasks, onDelete, toggleComplete, editTask }) => {
    const [filter, setFilter] = useState('all');
    const statusFilters = {
      All: () => true,
      Active: task => !task.completed,
      Completed: task => task.completed,
    };
  return (
    <ul>
      {tasks.filter(<FilterList/>).map(task => (
        <Todo
              id={task.id}
              key={task.id}
              title={task.title}
              onDelete={onDelete}
              toggleComplete={toggleComplete}
              editTask={editTask}
              completed={task.completed}
            
        />
      ))}
    </ul>
  );
}





// const taskList = tasks
//   .filter(FILTER_MAP[filter])
//   .map(task => (
//     <Todo
//       id={task.id}
//       key={task.id}
//       title={task.title}
//       onDelete={onDelete}
//       toggleComplete={toggleComplete}
//       editTask={editTask}
//       completed={task.completed}
//     />
//   ));
