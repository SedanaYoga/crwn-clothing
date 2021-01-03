export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER", //HARUS SAMA DENGAN DI REDUCER
  payload: user,
});
