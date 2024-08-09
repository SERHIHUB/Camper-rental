import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const linkClass = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={linkClass} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
