export enum userTypes {
  SET_AUTHED_USER = "SET_AUTHED_USER",
  LOGOUT = "LOGOUT",
}

export function setAuthedUser(id: string) {
  return {
    type: userTypes.SET_AUTHED_USER,
    id,
  };
}

export function logout() {
  return {
    type: userTypes.LOGOUT,
  };
}
