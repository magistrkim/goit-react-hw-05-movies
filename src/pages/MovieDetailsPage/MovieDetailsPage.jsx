import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader/Loader';
import { getMovieInfoById } from '../../shared/movies-api';
import css from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    getMovieInfoById(movieId)
      .then(data => setMovieInfo(data))
      .catch(() =>
        Notify.warning('Oops! Something went wrong, please try again later.')
      )
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {movieInfo && (
        <>
          <Link to={backLocation} className={css.link}>
            Back
          </Link>
          <div className={css.wrapper}>
            <img
              className={css.img}
              src={movieInfo.posterPath}
              alt={movieInfo.title}
              width="270"
              height="300"
            />
            <div className={css.wrapper__info}>
              <h1 className={css.title}>
                {movieInfo.movieTitle} ({movieInfo.releaseYear})
              </h1>
              <p className={css.text}>User Score: {movieInfo.voteAverage}</p>
              <h3 className={css.subtitle}>Overview</h3>
              <p className={css.text}>{movieInfo.overview}</p>
              <h3 className={css.subtitle}>Genres</h3>
              <p className={css.text}>{movieInfo.genres}</p>
              <h3 className={css.subtitle}>Additional information</h3>
              <ul className={css.list}>
                <li className={css.item}>
                  <Link
                    to="cast"
                    className={css.link__add}
                    state={{ from: backLocation }}
                  >
                    Cast
                  </Link>
                </li>
                <li className={css.item}>
                  <Link
                    to="reviews"
                    className={css.link__add}
                    state={{ from: backLocation }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
