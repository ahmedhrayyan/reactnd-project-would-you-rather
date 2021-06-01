export enum userTypes {
  SET_AUTHED_USER = "SET_AUTHED_USER",
}

export function setAuthedUser(id: string) {
  return {
    type: userTypes.SET_AUTHED_USER,
    id,
  };
}
