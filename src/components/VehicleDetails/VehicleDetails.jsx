import { Icon } from "../../shared";
import { useState } from "react";
import css from "./VehicleDetails.module.css";

const VehicleDetails = () => {
  const [camper, setCamper] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("currentCamper"));
    return savedValue;
  });

  const firstLetterUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={css.container}>
      <ul className={css.paramsList}>
        <li className={css.listItem}>
          <Icon iconId="icon-adults" />
          {`${camper.adults} adults`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-transmission" />
          {camper.transition && firstLetterUpper(camper.transmission)}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-ac" />
          {camper.details.airConditioner && `AC`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-petrol" className={css.iconPetrol} />
          {firstLetterUpper(camper.engine)}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-kitchen" className={css.icon} />
          {`${camper.details.kitchen} Kitchen`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-beds" className={css.icon} />
          {`${camper.details.beds} beds`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-conditioner" />
          {`${camper.details.airConditioner} air conditioner`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-cd" />
          {camper.details.CD && `CD`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-radio" />
          {camper.details.radio && `Radio`}
        </li>
        <li className={css.listItem}>
          <Icon iconId="icon-hob" />
          {`${camper.details.hob} hob`}
        </li>
      </ul>
      <h3 className={css.vehicleTitle}>Vehicle details</h3>
      <div className={css.border}></div>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p>Form</p> {camper.form}
        </li>
        <li className={css.detailsItem}>
          <p>Length</p> {camper.length}
        </li>
        <li className={css.detailsItem}>
          <p>Width</p> {camper.width}
        </li>
        <li className={css.detailsItem}>
          <p>Height</p> {camper.height}
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p> {camper.tank}
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p> {camper.consumption}
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
