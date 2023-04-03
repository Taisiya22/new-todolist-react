import React, { useState} from 'react';
// import { nanoid } from 'nanoid';
import css from './Form.module.css'


export function Form({ addTask }) {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
    
      return;

    }
    addTask(title)
    reset();
  };

  const reset = () => {
    setTitle('');
  };
  return (
    <form className={css.navBar} onSubmit={handleSubmit}>
      <input
        className={css.searchFormIinput}
        type="text"
        placeholder="add task"
        value={title}
        onChange={handleChange}
        // ref={inputRef}
      />
      <button className={css.searchFormBtn}>Add task</button>
    </form>
  );
}


