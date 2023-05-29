import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getTrendingMovies } from 'shared/movies-api';
import css from './home-page.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(data => setMovies(data))
      .catch(() =>
        Notify.failure('Oops! Something went wrong, please try again later.')
      )
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <Loader />}
      {movies && (
        <>
          <h1 className={css.title}>Trending today</h1>
          <MoviesList data={movies} />
        </>
      )}
    </>
  );
};

export default HomePage;
