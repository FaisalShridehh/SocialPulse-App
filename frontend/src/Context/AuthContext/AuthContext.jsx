import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: {
//     _id: "65248266b1fd54b95d309c67",
//     firstName: "Faisal",
//     lastName: "Shrideh",
//     username: "Faisal Shrideh",
//     email: "Faisal@yahoo.com",
//     password: "$2b$10$GDzhe3gZqvKjsnt/C7SojONPXJ5VHQfDWHXUvJg/Gzu3BIM5rmK2i",
//     profilePicture: "",
//     coverPicture: "",
//     followers: [],
//     followings: ["6524824db1fd54b95d309c64"],
//     isAdmin: false,
//     description: "Hey Im Faisal Welcome To My Profile",
//     city: "Irbid",
//     from: "Jordan",
//     relationship: 2,
//     createdAt: "2023-10-09T22:44:54.705Z",
//     updatedAt: "2023-10-09T22:46:06.406Z",
//     __v: 0,
//   },
//   isFetching: false,
//   error: false,
// };

// const INITIAL_STATE = {
//   user: null,
//   isFetching: false,
//   error: false,
// };

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
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
