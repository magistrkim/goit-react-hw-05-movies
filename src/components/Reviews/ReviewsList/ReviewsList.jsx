import PropTypes from 'prop-types';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import css from './reviews-list.module.css';

const ReviewList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <ReviewsItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
