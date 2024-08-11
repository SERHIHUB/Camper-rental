import OrderForm from "../OrderForm/OrderForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./Features.module.css";

const Features = () => {
  return (
    <div className={css.container}>
      <VehicleDetails />
      <OrderForm />
    </div>
  );
};

export default Features;
