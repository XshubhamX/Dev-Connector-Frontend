import { createContext } from "react";

export const PostContext = createContext({
  posts: [],
  setPosts: () => {},
});
