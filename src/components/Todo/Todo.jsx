import css from './Todo.module.css';
import { useState} from 'react'; 


export const Todo = ({
  tasks,
  onDelete,
  toggleComplete,
  id,
  title,
  completed,
  editTask
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleChange = e => {
    setNewTitle(e.target.value.trim());
  };
  const handleSubmit = (e) => { 
    if (!newTitle.trim()) {
      return;
    }
    e.preventDefault();
    editTask(id, newTitle) ;
    setNewTitle('');
    setEditing(false);
  }
  const editingTemplate = (
    <form onSubmit={handleSubmit} className={css.item}>
      <input
        type="text"
        id={id}
        value={newTitle || title} 
        onChange={handleChange}
      />
      <div>
        <button onClick={() => setEditing(false)}>Cancel</button>
        <button>Save</button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div key={id} className={css.item }>
      <p>{title}</p>
      <div>
        <div>
          <input
            key={id}
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(id)}
          />
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      </div>
    </div>
  );
  
  return (
    <li className={css.taskList}>
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );

};
