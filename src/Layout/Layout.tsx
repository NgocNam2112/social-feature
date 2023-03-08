import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import styles from "./Layout.module.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
