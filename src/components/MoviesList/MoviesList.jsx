import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './movies-list.module.css';

const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {data.map(({ id, movieTitle, src }) => (
        <li key={id} className={css.item}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link}
          >
            <img src={src} alt={movieTitle} className={css.img} />
            <h3 className={css.subtitle}>{movieTitle}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movieTitle: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default MoviesList;
