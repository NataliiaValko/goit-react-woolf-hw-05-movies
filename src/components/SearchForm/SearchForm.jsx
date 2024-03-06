import { useSearchParams } from 'react-router-dom';
import styles from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const queryFromParams = searchParams.get('query') ?? '';

  const [query, setQuery] = useState(queryFromParams);

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.searchQuery.value.trim();
    if (!query) return;

    onSubmit(query);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Search movie
          <input
            className={styles.input}
            name="searchQuery"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
