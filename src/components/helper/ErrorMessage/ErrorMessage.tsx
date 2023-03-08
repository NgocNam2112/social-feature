import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<IProps> = ({ errorMessage }) => {
  return <p className={styles.errorMessage}>{errorMessage}</p>;
};

export default ErrorMessage;
