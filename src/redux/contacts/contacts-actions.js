// import { v4 as uuidv4 } from "uuid";
// import types from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");

/*Redux Tookit*/

// const addContact = createAction("contacts/add", ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

const deleteFromContacts = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

/*Redux*/

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });

// const deleteFromContacts = (contactListId) => ({
//   type: types.DELETE,
//   payload: contactListId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default {
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   deleteFromContacts,
//   changeFilter,
// };
