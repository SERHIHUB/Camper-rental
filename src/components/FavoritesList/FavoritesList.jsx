import CamperItem from "../CamperItem/CamperItem";
import { selectFavoritesCampers } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import css from "./FavoritesList.module.css";

const FavoritesList = () => {
  const favoritesCampers = useSelector(selectFavoritesCampers);

  return (
    <ul className={css.list}>
      {favoritesCampers.map((item) => {
        return (
          <li key={nanoid()}>
            <CamperItem camper={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
