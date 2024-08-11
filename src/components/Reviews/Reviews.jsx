import OrderForm from "../OrderForm/OrderForm";
import ReviewsList from "../ReviewsList/ReviewsList";
import css from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={css.container}>
      <ReviewsList />
      <OrderForm />
    </div>
  );
};

export default Reviews;
