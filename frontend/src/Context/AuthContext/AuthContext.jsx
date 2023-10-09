import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "652191be0273a019298fc725",
    firstName: "faisal",
    lastName: "shrideh",
    username: "faisal shrideh",
    email: "faisal@yahoo.com",
    password: "$2b$10$hJ6Qws8eBjDjty1W61m1vOdScKcRiuIpFZs07xoPv8rvj/P3z3UDq",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: ["652192120273a019298fc72b"],
    isAdmin: false,
    createdAt: "2023-10-07T17:13:34.846Z",
    updatedAt: "2023-10-07T17:52:48.421Z",
    __v: 0,
  },
  isFetching: false,
  error: false,
};
// const INITIAL_STATE = {
//   user: null,
//   isFetching: false,
//   error: false,
// };

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // console.log(state);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
