import { useState, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './search-bar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const searchValue = searchParams.get('query') ?? '';

    setQuery(searchValue);
  }, [searchParams]);

  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event);
    setQuery('');
  };

  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.search__btn}>
          <span className={css.search__label}>Search</span>
        </button>
        <input
          onChange={handleChange}
          value={query}
          name="search"
          className={css.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie name"
          required
        />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Searchbar);
