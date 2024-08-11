import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ReviewsList.module.css";

const ReviewsList = () => {
  const [ourCamper, setOurCamper] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("currentCamper"));
    return savedValue;
  });

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {ourCamper.reviews.map((item) => {
          return (
            <li className={css.reviewsItem} key={nanoid()}>
              <h3 className={css.title}>{item.reviewer_name}</h3>
              <p className={css.text}>{item.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
