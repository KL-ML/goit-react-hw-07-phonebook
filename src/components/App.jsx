import React, { useEffect, useMemo } from "react";
import shortid from 'shortid';
import { Box } from "./Box";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from "react-redux";
import { filterInputAction } from "redux/contactsFilter/contacts.slice";
import { addContact, fetchContacts, deleteContact } from "redux/contactsFilter/contacts.thunk";
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading
} from "redux/contactsFilter/contacts.selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  
  const changeFilter = e => {
    dispatch(
      filterInputAction(
        e.target.value,
      )
    );
  };
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  const formSubmitHandler = ({ name, number }) => {
    const currentContact = { id: shortid.generate(), name: name, number: number }
    const contactDublicate = contacts.find(c => c.name === currentContact.name);
    if (contactDublicate) {
      Notify.failure(`${currentContact.name} is allready in contacts.`);
      return;
    }
    dispatch(addContact(currentContact));
  };

  const visibleContacts = useMemo(() => {
    return contacts.filter(n =>
      n.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);
  
  const deleteCurrentContact = id => {
    dispatch(deleteContact(id));
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
        onSubmit={formSubmitHandler}
      />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteCurrentContact}>
        {isLoading && !error && <p>Loading...</p>}
        {!isLoading && !error && <p>Contacts list:</p>}
        {!isLoading && error && <p>Sorry, something goe's wrong</p>}
        </ContactList>
    </Box>
  );
};