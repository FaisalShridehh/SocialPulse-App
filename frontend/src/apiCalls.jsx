import axios from "axios";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
} from "./Context/PostContext/PostActions";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export async function loginCall(userCredentials, dispatch) {
  dispatch({
    type: "LOGIN_START",
  });
  try {
    const response = await axios.post(
      `${BaseBackEndUrl}/login`,
      userCredentials
    );

    if (response.status !== 200)
      throw new Error(
        "[Api Calls LOGIN_START Error] error occur during login " +
          response.status
      );

    // console.log(response.data.isUserExist);

    dispatch({
      type: "LOGIN_SUCCESS",
      userPayload: response.data.isUserExist,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error,
    });
  }
}

export async function PostsCall(userCredentials, dispatch) {
  dispatch({
    type: FETCH_POSTS_START,
  });
  try {
    const response = await axios.post(
      `${BaseBackEndUrl}/login`,
      userCredentials
    );

    if (response.status !== 200)
      throw new Error(
        "[Api Calls LOGIN_START Error] error occur during login " +
          response.status
      );

    // console.log(response.data.isUserExist);

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      userPayload: response.data.isUserExist,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POSTS_FAILURE,
      payload: error,
    });
  }
}
