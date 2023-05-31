import PropTypes from 'prop-types';
import { useState } from 'react';

import css from './reviews-item.module.css';

const ReviewsItem = ({ data: { author, content } }) => {
  const [expandedOverview, setExpandedOverview] = useState(false);

  const toggleOverview = () => {
    setExpandedOverview(!expandedOverview);
  };

  return (
    <li className={css.item}>
      <p className={css.title}>
        Author: <span className={css.span}>{author}</span>
      </p>
      {content.length > 300 ? (
        <p className={css.text}>
          {expandedOverview ? content : `${content.substring(0, 300)}...`}
          <span className={css.expandLink} onClick={toggleOverview}>
            {expandedOverview ? 'See less' : 'See more'}
          </span>
        </p>
      ) : (
        <p className={css.text}>{content}</p>
      )}
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
