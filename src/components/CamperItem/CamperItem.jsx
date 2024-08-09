import { Button } from "../../shared";
import CamperDetails from "../CamperDetails/Camperdetails";
import css from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
  console.log(camper);

  const handleClick = () => {
    // console.log("click");
  };

  return (
    <div className={css.container}>
      <div className={css.photoWrapper}>
        <img className={css.photo} src={camper.gallery[0]} alt="camper" />
      </div>
      <div className={css.content}>
        <div className={css.titlePrice}>
          <h2 className={css.title}>{camper.name}</h2>
          <p className={css.price}>&#8364;{camper.price}</p>
        </div>
        <div className={css.ratingLocation}>
          <p
            className={css.rating}
          >{`${camper.rating}(${camper.reviews.length} reviews)`}</p>
          <p>{camper.location}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
        <CamperDetails camper={camper} />
        <Button className={css.btn} type="button" onClick={handleClick}>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default CamperItem;
