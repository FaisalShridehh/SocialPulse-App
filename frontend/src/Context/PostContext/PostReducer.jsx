export default function PostReducer(state, action) {
  switch (action.type) {
    case "FETCH_POSTS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    // Add more cases for other post-related actions

    default:
      return state;
  }
}
