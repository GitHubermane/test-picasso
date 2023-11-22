import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
