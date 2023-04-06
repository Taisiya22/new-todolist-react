
import css from './FilterBtn.module.css';

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

