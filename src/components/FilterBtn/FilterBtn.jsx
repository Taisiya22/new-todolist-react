import React from 'react';
import css from './FilterBtn.module.css';

export const FilterBtn = ({ name, setFilter }) => {
  return (
    <button
      className={css.itemBtn}
      type="button"
      onClick={() => {
        setFilter(name);
      }}
    >
      {name}
    </button>
  );
};
