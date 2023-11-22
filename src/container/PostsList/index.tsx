import { useEffect, useRef, useState } from "react";
import { Post } from "types";
import { useGetPostsQuery } from "API/post";
import { Loader } from "components";
import styles from "./styles.module.scss";
import { Row } from "./Row";

export const PostsList = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const [page, setPage] = useState(1);
  const bodyRef = useRef<HTMLDivElement>(null);

  const { data, isFetching, isLoading } = useGetPostsQuery({ limit: 20, page });

  // Проверка есть ли еще посты для загрузки
  const hasMore = data ? data[data.length - 1].id < 100 : false;

  const isLoaderShown = hasMore || isLoading;

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = bodyRef.current?.scrollHeight;
      const scrollTop = bodyRef.current?.scrollTop;
      const offsetHeight = bodyRef.current?.offsetHeight;

      // Проверка достигнута ли нижняя граница при скролле
      let scrolledToBottom;
      if (scrollHeight && scrollTop && offsetHeight)
        scrolledToBottom = offsetHeight + scrollTop >= scrollHeight;

      if (scrolledToBottom && !isFetching && hasMore) {
        setPage(prev => prev + 1);
      }
    };

    bodyRef.current!.addEventListener("scroll", onScroll);

    return () => {
      bodyRef.current?.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  useEffect(() => {
    if (data) setPosts(prev => [...prev, ...data]);
  }, [data]);

  /* 
  Добавляем этот useEffect, т.к. при возвращении после страницы post 
  предыдущие посты остаются и продолжают накапливаться
  */
  useEffect(() => () => setPosts([]), []);

  return (
    <div className={styles.post_list}>
      <div className={styles.post_list__header}>
        <div>Id</div>
        <div>Description</div>
        <div>Title</div>
      </div>
      <div
        className={styles.post_list__body}
        ref={bodyRef}
      >
        {posts.map(post => (
          <Row
            key={post.id}
            {...post}
          />
        ))}
        {isLoaderShown && (
          <div className={styles.post_list__loader}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
