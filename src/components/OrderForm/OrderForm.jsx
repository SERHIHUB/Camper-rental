import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Icon } from "../../shared";
import css from "./OrderForm.module.css";

const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = (data) => {
    const { name, email, bookingDate, comment } = data;
    console.log(data);
    reset();
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            className={css.input}
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </label>
        <label>
          <input
            className={css.input}
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        <label className={css.date}>
          <input
            className={css.input}
            placeholder="Booking date"
            {...register("bookingDate", { required: true })}
          />
          <Icon className={css.dateIcon} iconId="icon-booking" />
        </label>
        <label>
          <input
            className={clsx(css.input, css.comment)}
            placeholder="Comment"
            {...register("comment")}
          />
        </label>
        <input className={css.submitBtn} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default OrderForm;
