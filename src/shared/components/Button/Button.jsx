import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  className,
  onClick,
  ...props
}) => {
  return (
    // <div className={clsx(css.button, { [className]: className })}>
    //   {children}
    //   </div>
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.button, { [className]: className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
