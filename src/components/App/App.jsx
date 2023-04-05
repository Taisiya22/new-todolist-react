import { useState } from 'react';
import { Form } from '../Form/Form.jsx';
import { Todo } from '../Todo/Todo.jsx';
import { FilterBtn } from '../FilterBtn/FilterBtn.jsx';
import { Counter } from 'components/Counter/Counter.jsx';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
// console.log(FILTER_NAMES);
export const App = () => {
  const [tasks, setTasks] = useState([
    { id: nanoid(), title: 'Learn HTML', completed: false },
    { id: nanoid(), title: 'Learn CSS', completed: false },
    { id: nanoid(), title: 'Learn JS', completed: false },
    { id: nanoid(), title: 'Learn React', completed: false },
    { id: nanoid(), title: 'Learn Node.js', completed: false },
    { id: nanoid(), title: 'Completed course Full-Stack', completed: false },
    { id: nanoid(), title: 'Get offer from IT company', completed: false },
    {
      id: nanoid(),
      title: 'Happy end : family reunification',
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState('All');

  const filterList = FILTER_NAMES.map(name => (
    <FilterBtn key={name} name={name} setFilter={setFilter} />
  ));

  // console.log(tasks)
  const addTask = title => {
    // console.log(newtitle)
    const newTask = { id: nanoid(), title: title, completed: false };
    setTasks([...tasks, newTask]);
  };
  const onDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const editTask = (id, newTitle) =>
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task))
    );
  const completedTasks = tasks.reduce(
    (acc, task) => (task.completed ? acc + 1 : acc),
    0
  );

  const taskList = tasks
    .filter(FILTER_MAP[filter])
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
      <Form addTask={addTask} />
      <div className={css.wrapper}>
        <Counter tasks={tasks} />
        <ul className={css.filterBtn}>{filterList}</ul>
      </div>
      {/* <Todo
        id={tasks.id}
        key={tasks.id}
        // title={task.title}
        onDelete={onDelete}
        toggleComplete={toggleComplete}
        editTask={editTask}
        tasks={tasks}
      /> */}
      <ul>{taskList}</ul>
    </div>
  );
};
