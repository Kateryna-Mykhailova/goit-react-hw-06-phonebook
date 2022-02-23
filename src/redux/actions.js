import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// export const myAction = value => ({
//   type: "MY_ACTION",
//      payload: value
// })

// const addNewContact = ({ name, number }) => ({
//   type: 'contact/add',
//   payload: {
//     name,
//     number,
//     id: uuid(),
//   },
// });
const addNewContact = createAction('contact/add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuid(),
    },
  };
});

const filterContact = createAction('contact/changeFilter');

const deleteContact = createAction('contacts/delete');

// const deleteContact = value => ({
//     type: "contact/delete",
//     payload: value
// });

// export default { addNewContact};
// const addNewContact = createAction('contact/add', (name, number) => ({
//  payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }))
export default { addNewContact, filterContact, deleteContact };
