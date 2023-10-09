// PostActions.js

// Action types
export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

// Action creators
export function fetchPostsStart() {
  return {
    type: FETCH_POSTS_START,
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}

// Add more action creators for other post-related actions like creating, updating, or deleting posts
