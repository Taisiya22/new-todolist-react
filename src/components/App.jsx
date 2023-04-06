import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form.jsx';
import { Counter } from 'components/Counter/Counter.jsx';
import { TodoList } from 'components/TodoList/TodoList.jsx';

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

  return (
    <div>
      <Form addTask={addTask} />
      <Counter tasks={tasks} />
      <TodoList
        tasks={tasks}
        onDelete={onDelete}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};
