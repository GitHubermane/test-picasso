import { useEffect, useState } from "react";
import { Row } from "./Row";
import styles from "./styles.module.scss";

export interface RootInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const PostsList = () => {
  const [posts, setPosts] = useState([] as RootInterface[]);

  const fetchPosts = async () => {
    const data: Promise<RootInterface[]> = (
      await fetch("https://jsonplaceholder.typicode.com/posts?_page=1_limit=20")
    ).json();
    setPosts(await data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.post_list}>
      <div className={styles.post_list__header}>
        <div>Id</div>
        <div>Description</div>
        <div>Title</div>
      </div>
      <div className={styles.post_list__body}>
        {posts.map(post => (
          <Row
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};
