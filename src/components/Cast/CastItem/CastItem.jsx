import PropTypes from 'prop-types';

import css from './cast-item.module.css';

const CastItem = ({ data: { src, name, character } }) => {
  return (
    <li className={css.item}>
      <img
        src={`${src}`}
        alt={`${name}`}
        width="100"
        height="150"
        className={css.img}
      />
      <div className={css.wrapper}>
        <p className={css.title}>{name}</p>
        <p className={css.text}>{character}</p>
      </div>
    </li>
  );
};

export default CastItem;

CastItem.propTypes = {
    data: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired,
  };
