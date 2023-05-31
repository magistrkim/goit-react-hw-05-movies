import PropTypes from 'prop-types';
import CastItem from '../CastItem/CastItem';

import css from './cast-list.module.css';

const CastList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <CastItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
