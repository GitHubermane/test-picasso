import { useGetPostsQuery } from "API/post";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "types";
import { Loader } from "components";
import styles from "./styles.module.scss";

export const PostInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetPostsQuery({ limit: 1, page: Number(id) });

  const post = data ? data[0] : ({} as Post);

  const onGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.post_info}>
      <div>
        <button
          className={styles.post_info__back_btn}
          onClick={onGoBackClick}
        >
          {"<"} Go back
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{post.title}</h2>
          <div className={styles.post_info__block}>
            <div>id: {post.id}</div>
            <div>userId: {post.userId}</div>
          </div>
          <div className={styles.post_info__text}>{post.body}</div>
        </>
      )}
    </div>
  );
};
