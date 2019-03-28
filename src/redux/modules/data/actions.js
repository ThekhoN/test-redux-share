export const UPDATE_DATA = "UPDATE_DATA";

export const updateData = payload => {
  console.log({ payload });
  return {
    type: UPDATE_DATA,
    payload
  };
};
