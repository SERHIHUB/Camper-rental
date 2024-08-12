import { Icon } from "../../shared";
import clsx from "clsx";
import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const firstLetterUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <ul className={css.characteristics}>
        <li className={css.listItem}>
          <Icon iconId="icon-adults" className={css.iconAdults} />
          {`${camper.adults} adults`}
        </li>
        <li className={css.listItem}>
          <Icon
            iconId="icon-transmission"
            className={clsx(css.icon, css.transmission)}
          />
          {firstLetterUpper(camper.transmission)}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-petrol" className={css.iconPetrol} />
          {firstLetterUpper(camper.engine)}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-kitchen" className={css.icon} />
          {camper.details.kitchen && `Kitchen`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-beds" className={css.icon} />
          {`${camper.details.beds} beds`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-ac" className={css.iconAC} />
          {camper.details.airConditioner && `AC`}
        </li>
      </ul>
    </>
  );
};

export default CamperDetails;
