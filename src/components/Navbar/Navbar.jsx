import { NavLink } from 'react-router-dom';

import css from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
