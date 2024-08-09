import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  return (
    <ul className={css.characteristics}>
      <li className={css.listItem}>{`${camper.adults} adults`}</li>
      <li className={css.listItem}>{`${camper.transmission}`}</li>
      <li className={css.listItem}>{`${camper.engine}`}</li>
      <li className={css.listItem}>{camper.details.kitchen && `Kitchen`}</li>
      <li className={css.listItem}>{`${camper.details.beds} beds`}</li>
      <li className={css.listItem}>{camper.details.airConditioner && `AC`}</li>
    </ul>
  );
};

export default CamperDetails;
