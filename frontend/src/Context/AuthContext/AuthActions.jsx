export function LoginStart(userMailPasswordCredentials) {
  return {
    type: "LOGIN_START",
  };
}
export function LoginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    userPayload: user,
  };
}
export function LoginFailure(error) {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
}
export function Follow(userId) {
  return {
    type: "FOLLOW",
    payload: userId,
  };
}
export function UnFollow(userId) {
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
}


