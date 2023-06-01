import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieByName } from 'shared/movies-api';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) {
      setMovies(null);
      return;
    }
    setLoading(true);

    getMovieByName(searchValue)
      .then(data => setMovies(data))
      .catch(() =>
        Notify.failure('Oops! Something went wrong, please try again later.')
      )
      .finally(() => setLoading(false));
  }, [searchValue]);

  const handleSubmit = event => {
    event.preventDefault();

    const inputValue = event.target.elements.search.value
      .trim()
      .toLowerCase();

    if (inputValue === '') {
      Notify.warn('Please, enter movie title.');
      return;
    }

    setSearchParams({ query: inputValue });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {movies && <MoviesList data={movies} />}
      {movies?.length === 0 && (
        <p>There is no movies matching your request: "{searchValue}"</p>
      )}
    </>
  );
};

export default MoviesPage;