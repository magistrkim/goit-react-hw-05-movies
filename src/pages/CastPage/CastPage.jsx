import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieCast } from 'shared/movies-api';
import Loader from 'components/Loader/Loader';
import CastList from 'components/Cast/CastList/CastList';
import css from '../../components/Cast/CastItem/cast-item.module.css';

const CastPage = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieCast(movieId)
      .then(data => setCast(data))
      .catch(() =>
        Notify.warning('Oops! Something went wrong, please try again later.')
      )
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast?.length === 0 && (
        <p className={css.title}>There is no information about this movie.</p>
      )}
      {cast && <CastList data={cast} />}
    </>
  );
};

export default CastPage;
