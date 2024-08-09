import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Loyout.module.css";

const Loyout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense>{children}</Suspense>
    </>
  );
};

export default Loyout;
