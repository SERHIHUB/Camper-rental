import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ReviewsList.module.css";
import { Icon } from "../../shared";

const ReviewsList = () => {
  const [ourCamper, setOurCamper] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("currentCamper"));
    return savedValue;
  });

  const firstLetterUpper = (string) => {
    return string.charAt(0).toUpperCase();
  };

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {ourCamper.reviews.map((item) => {
          return (
            <li className={css.reviewsItem} key={nanoid()}>
              <div className={css.titleContainer}>
                <div className={css.circle}>
                  {firstLetterUpper(item.reviewer_name)}
                </div>
                <div className={css.starsContainer}>
                  <h3 className={css.title}>{item.reviewer_name}</h3>
                  <ul className={css.starList}>
                    {Array.from({ length: item.reviewer_rating }).map(
                      (item) => {
                        return (
                          <li key={nanoid(item)}>
                            <Icon iconId="icon-star" className={css.icon} />
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <p className={css.text}>{item.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
