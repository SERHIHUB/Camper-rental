import CamperItem from "../CamperItem/CamperItem";
import { selectCampers } from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { Button } from "../../shared";
import css from "./CamperList.module.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const CamperList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isButtonShow, setIsButtonShow] = useState(true);
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();

  const params = {
    page: currentPage,
    limit: 4,
  };

  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch, params.page]);

  const handleLoadMoreClick = () => {
    setCurrentPage(null);
    setIsButtonShow(false);
  };

  return (
    <>
      <ul className={css.list}>
        {campers.map((item) => {
          return (
            <li key={nanoid()}>
              <CamperItem camper={item} />
            </li>
          );
        })}
      </ul>
      {isButtonShow && (
        <Button
          className={css.loadMoreBtn}
          type="button"
          onClick={handleLoadMoreClick}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default CamperList;
