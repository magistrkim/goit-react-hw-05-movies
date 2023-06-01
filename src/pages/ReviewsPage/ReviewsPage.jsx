import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieReviews } from 'shared/movies-api';
import Loader from 'components/Loader/Loader';
import ReviewList from 'components/Reviews/ReviewsList/ReviewsList';
import css from '../../components/Reviews/ReviewsItem/reviews-item.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(() =>
        Notify.warning('Oops! Something went wrong, please try again later.')
      )
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews?.length === 0 && (
        <p className={css.description}>
          There is no information about this movie.
        </p>
      )}
      {reviews && <ReviewList data={reviews} />}
    </>
  );
};

export default ReviewsPage;
