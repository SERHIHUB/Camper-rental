import CamperItem from "../CamperItem/CamperItem";
import { selectCampers } from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CamperList.module.css";
import { useEffect } from "react";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {campers.map((item) => {
        return (
          <li key={item._id}>
            <CamperItem camper={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CamperList;
