import React, { useState } from 'react';
import css from './FilterBtn.module.css';

// const statusFilters = {
//   All: () => true,
//   Active: task => !task.completed,
//   Completed: task => task.completed,
// };

// const filterName = Object.keys(statusFilters);

// export const FilterList = ({tasks }) => {
//   const [filter, setFilter] = useState('all');
//   return (
//     <ul>
//       {filterName.map(name => (
//         <FilterBtn key={name} name={name} setFilter={setFilter} />
//       ))}
//     </ul>
//   );
  
// };



export const FilterBtn = ({setFilter, name }) => {
  return (
    <button
      className={css.itemBtn}
      type="button"
      onClick={() => {
        setFilter(name);
      }}
    >
      {name}
    </button>)
}


// export const FilterBtn = ({ name, setFilter }) => {
//   return (
//     <button
//       className={css.itemBtn}
//       type="button"
//       onClick={() => {
//         setFilter(name);
//       }}
//     >
//       {name}
//     </button>
//   );
// };