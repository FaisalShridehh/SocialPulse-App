import { createContext, useReducer } from "react";
import PostReducer from "./PostReducer";

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: false,
};

export const PostContext = createContext(INITIAL_STATE);

export function PostContextProvider({ children }) {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
