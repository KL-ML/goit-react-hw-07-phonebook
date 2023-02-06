import React, {
  // useEffect,
  useMemo,
} from "react";
import shortid from 'shortid';
import { Box } from "./Box";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsAction, filterInputAction, setContactsAction } from "redux/contactsFilter/contacts.slice";

export const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const changeFilter = e => {
    dispatch(
      filterInputAction(
        e.target.value,
      )
    );
  };
  //  const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? initState.contactsList.contacts;
  // });
 
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
    
  const formSubmitHandler = ({ name, number }) => {
    const currentContact = { name: name, id: shortid.generate(), number: number }
    const contactDublicate = contacts.find(c => c.name === currentContact.name);
    if (contactDublicate) {
      Notify.failure(`${currentContact.name} is allready in contacts.`);
      return;
    }
    dispatch(setContactsAction(
      currentContact
    ));
  };

  const visibleContacts = useMemo(() => {
    return contacts.filter(n =>
      n.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);
  
  const deleteContact = id => {
    dispatch(deleteContactsAction(
      id
    ));
  };

  return (
    <Box
      bg="light"
      color="text"
      width="containerWidth"
      position="relative"
      p={6}
      my={0}
      mx="auto"
      boxShadow="containerShadow"
      borderRadius="normal"
      overflow="hidden"
      fontFamily="heading"
    >
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact} />
    </Box>
  );
};