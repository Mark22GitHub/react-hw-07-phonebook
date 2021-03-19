import axios from "axios";
import contactsActions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:2204";

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(contactsActions.addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(contactsActions.addContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactsError(error)));
};

export default { addContact };
