export const addPerson = (value) => ({ type: "ADD_PERSON", data: value });
export const removePerson = (value) => ({
  type: "REMOVE_PERSON",
  person: value
});
