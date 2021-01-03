import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER, //HARUS SAMA DENGAN DI REDUCER
  payload: user,
});
