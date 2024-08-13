import { Button, Icon } from "../../shared";
import { useSelector, useDispatch } from "react-redux";
import { getFavoritesCampers } from "../../redux/campers/operations";
import { useState } from "react";

import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CamperItem.module.css";
import { selectFavoritesCampers } from "../../redux/campers/selectors";
import { newMyCampers } from "../../redux/campers/slice";

import React from "react";
import MyModal from "../Modal/Modal";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import clsx from "clsx";

const CamperItem = ({ camper }) => {
  const myCampers = useSelector(selectFavoritesCampers);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(() => {
    const savedValue = myCampers.find((item) => item._id === camper._id);
    return savedValue ? camper._id : "";
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      maxHeight: "80vh",
      overflowY: "auto",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleClick = () => {
    openModal();
    localStorage.setItem("currentCamper", JSON.stringify(camper));
    document.body.classList.add("noScroll");
  };

  const handleFavoriteClick = () => {
    setIsFavorite(camper._id);
    dispatch(getFavoritesCampers(camper._id));
  };

  const handleNotFavoriteClick = () => {
    setIsFavorite("");

    dispatch(newMyCampers(camper._id));
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.backgroundColor = "rgba(11,12,13,0.4)";
  }

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.backgroundColor = "";
    document.body.classList.remove("noScroll");
  };

  return (
    <div
      className={clsx(css.campContainer, { modalIsOpen: css.modalOpen })}
      id="camper"
    >
      <div className={css.photoWrapper}>
        <img className={css.photo} src={camper.gallery[0]} alt="camper" />
      </div>
      <div className={css.content}>
        <div className={css.titlePrice}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.priceFavorit}>
            <p className={css.price}>&#8364;{camper.price}</p>
            {isFavorite ? (
              <Button
                className={css.favoriteBtn}
                type="button"
                onClick={handleNotFavoriteClick}
              >
                <Icon iconId="icon-heart" className={css.heartRed} />
              </Button>
            ) : (
              <Button
                className={css.favoriteBtn}
                type="button"
                onClick={handleFavoriteClick}
              >
                <Icon iconId="icon-heart" className={css.heartBlack} />
              </Button>
            )}
          </div>
        </div>
        <div className={css.ratingLocation}>
          <Icon iconId="icon-star" className={css.star} />
          <p
            className={css.rating}
          >{`${camper.rating}(${camper.reviews.length} reviews)`}</p>
          <Icon iconId="icon-map-pin" className={css.location} />
          <p>{camper.location}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
        <CamperDetails camper={camper} />
        <Button className={css.btn} type="button" onClick={handleClick}>
          Show more
        </Button>
      </div>
      <MyModal
        id="modalBody"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onAfterOpen={afterOpenModal}
        contentLabel="Example Modal"
        customStyles={customStyles}
      >
        <DetailsInfo camper={camper} handleCloseModal={handleCloseModal} />
      </MyModal>
    </div>
  );
};

export default CamperItem;
