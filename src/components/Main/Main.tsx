import React from "react";
import styles from "./Main.module.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Main = ({ children }: Props) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
