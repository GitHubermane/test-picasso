import { Post, Posts } from "pages";

export const POSTS_ROUTE = "/posts";
export const POST_ROUTE = "/post/";

type RoutesType = {
  path: string;
  Component: () => JSX.Element;
};

export const routes: RoutesType[] = [
  {
    path: POSTS_ROUTE,
    Component: Posts,
  },
  { path: `${POST_ROUTE}:id`, Component: Post },
];
