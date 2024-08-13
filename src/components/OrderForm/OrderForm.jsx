import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Icon } from "../../shared";
import * as Yup from "yup";
import css from "./OrderForm.module.css";
import MyModal from "../Modal/Modal";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const OrderForm = () => {
  const formSchema = Yup.object({
    name: Yup.string().min(3).max(20).required(),
    email: Yup.string().email().required(),
    bookingDate: Yup.string().required(),
  });

  const [value, onChange] = useState(new Date());
  // const [selectDate, setSelectDate] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "45%",
      left: "80%",
      maxHeight: "80vh",
      overflowY: "auto",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleSelectDate = () => {
    setModalIsOpen(true);
  };

  // const handleDate = (value) => {
  //   console.log(String(value.getDate()).padStart());
  //   let currentDate = String(value.getDate()).padStart();
  //   return currentDate;
  // };

  function afterOpenModal() {
    document.body.style.backgroundColor = "rgba(11,12,13,0.4)";
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
    // document.body.style.backgroundColor = "";
    // document.backGround.style.backgroundColor = "";
    document.body.classList.remove("noScroll");
  };

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      bookingDate: "",
    },
  });

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
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
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
          <Button className={css.dateBtn} onClick={handleSelectDate}>
            <Icon className={css.dateIcon} iconId="icon-booking" />
          </Button>
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
      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onAfterOpen={afterOpenModal}
        contentLabel="Example Modal"
        // style={dateStyles}
        customStyles={customStyles}
      >
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            // onClick={(value) => {
            //   setSelectDate(value);
            // }}
          />
        </div>
      </MyModal>
    </div>
  );
};

export default OrderForm;
