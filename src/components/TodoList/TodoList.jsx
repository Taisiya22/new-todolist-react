
import { Todo } from '../Todo/Todo';
import { useState } from 'react';
import { FilterBtn } from '../FilterBtn/FilterBtn';
import css from './TodoList.module.css';

const statusFilters = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};
const filterNames = Object.keys(statusFilters);
export const TodoList = ({ tasks, onDelete, toggleComplete, editTask }) => {
  const [filter, setFilter] = useState('All');

  const filterList = filterNames.map(name => (
    <FilterBtn key={name} name={name} setFilter={setFilter} />
  ));

  const taskList = tasks
    .filter(statusFilters[filter])
    .map(task => (
      <Todo
        id={task.id}
        key={task.id}
        title={task.title}
        onDelete={onDelete}
        toggleComplete={toggleComplete}
        editTask={editTask}
        completed={task.completed}
      />
    ));
  return (
    <div>
      <ul className={css.filterBtn}>{filterList}</ul>
      <ul >{taskList}</ul>
    </div>
    
  );
};
