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
    setNewTitle(e.target.value);
  };
  const handleSubmit = (e) => { 
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
          <button type = 'button' onClick={() => setEditing(true)}>Edit</button>
        </div>
      </div>
    </div>
  );
  
  return (
    <li className={css.taskList}>
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );

  // return isEditing ? (
  //   <ul>
  //     {tasks.map(({ id, newTitle, title }) => (
  //       <form onSubmit={() => {handleSubmit(id) }} className={css.item} key={id}>
  //         <input
  //           type="text"
  //           id={id}
  //           value={newTitle || title}
  //           onChange={() => { handleChange(id)} }
  //         />
  //         <div>
  //           <button type="button" onClick={() => setEditing(false)}> 
  //             Cancel
  //           </button>
  //           <button type="button">Save</button>
  //         </div>
  //       </form>
  //     ))}
  //   </ul>
  // ) : (
  //   <ul>
  //     {tasks.map(({ id, title, completed }) => (
  //       <div key={id} className={css.item}>
  //         <p>{title}</p>
  //         <div>
  //           <div>
  //             <input
  //               key={id}
  //               type="checkbox"
  //               checked={completed}
  //               onChange={() => toggleComplete(id)}
  //             />
  //             <button onClick={() => onDelete(id)}>Del</button>
  //             <button onClick={() => setEditing(true)}>Edit</button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </ul>
  // );
};
