import React from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={css.error}>
      <p>Something went wrong!</p>
      <p>{`${error}`}</p>
    </div>
  );
};

export default ErrorMessage;