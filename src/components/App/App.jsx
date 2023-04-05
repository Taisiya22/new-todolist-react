import { useState } from 'react';
import { Form } from '../Form/Form.jsx';
import { Todo } from '../Todo/Todo.jsx';
import { FilterBtn } from '../FilterBtn/FilterList.jsx';
import { Counter } from 'components/Counter/Counter.jsx';
import { nanoid } from 'nanoid';
import css from './App.module.css';
// import { FilterList } from 'components/FilterBtn/FilterList.jsx';
// import { TodoList } from 'components/TodoList.jsx';
const filterStatus = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};
const filterNames = Object.keys(filterStatus);
// console.log(filterStatus);
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

  const filterList = filterNames.map(name => (
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

  const taskList = tasks
     .filter(filterStatus[filter])
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
        {/* <FilterList /> */}
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

      {/* <TodoList
        tasks={tasks}
        onDelete={onDelete}
        toggleComplete={toggleComplete}
        editTask={editTask}
      /> */}

      <ul>{taskList}</ul> 
    </div>
  );
};
