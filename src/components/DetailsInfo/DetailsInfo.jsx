import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { Button, Icon } from "../../shared";
import {  useEffect } from "react";
import {  useDispatch } from "react-redux";
import { currentCamp } from "../../redux/campers/slice";
import css from "./DetailsInfo.module.css";

const linkClass = ({ isActive }) => clsx(css.nav, { [css.active]: isActive });

const DetailsInfo = ({ camper, handleCloseModal }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.setItem("currentCamper", JSON.stringify(camper));
  };

  useEffect(() => {
    dispatch(currentCamp(camper._id));
  }, []);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>{camper.name}</h2>
          <Button
            className={css.closeBtn}
            type="button"
            onClick={handleCloseModal}
          >
            <Icon iconId="icon-close" className={css.closeIcon} />
          </Button>
        </div>

        <div className={css.ratingLocation}>
          <Icon iconId="icon-star" className={css.star} />
          <p
            className={css.rating}
          >{`${camper.rating}(${camper.reviews.length} reviews)`}</p>
          <Icon iconId="icon-map-pin" className={css.location} />
          <p>{camper.location}</p>
        </div>
        <p className={css.price}>&#8364;{camper.price}</p>
      </div>

      <ul className={css.imagesList}>
        {camper.gallery.map((item) => {
          return (
            <li className={css.imagItem} key={nanoid()}>
              <img className={css.photo} src={item} alt="camper" />
            </li>
          );
        })}
      </ul>

      <div className={css.details}>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.detailsList}>
          <li onClick={handleClick}>
            <NavLink className={linkClass} to="features">
              Features
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink className={linkClass} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className={css.border}></div>
      </div>
      <Outlet />
    </div>
  );
};

export default DetailsInfo;
