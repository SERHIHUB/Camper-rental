import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ReviewsList.module.css";
import { Icon } from "../../shared";

const ReviewsList = () => {
  const [ourCamper, setOurCamper] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("currentCamper"));
    return savedValue;
  });

  console.log(ourCamper.reviews);

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {ourCamper.reviews.map((item) => {
          return (
            <li className={css.reviewsItem} key={nanoid()}>
              <h3 className={css.title}>{item.reviewer_name}</h3>

              {item.reviewer_rating}

              <ul className={css.starList}>
                <li>
                  <Icon iconId="icon-star" className={css.icon} />
                </li>
              </ul>
              <p className={css.text}>{item.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
