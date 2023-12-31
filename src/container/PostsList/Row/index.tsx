import { FC } from "react";
import { Link } from "react-router-dom";
import { POST_ROUTE } from "routes";
import styles from "./styles.module.scss";

type PropsType = {
  id: number;
  body: string;
  title: string;
};

export const Row: FC<PropsType> = ({ id, body, title }) => {
  return (
    <div className={styles.row}>
      <div>{id}</div>
      <div>{body}</div>
      <div>{title}</div>
      <div>
        <Link
          to={POST_ROUTE + id}
          className={styles.row__btn}
        >
          Просмотр
        </Link>
      </div>
    </div>
  );
};
