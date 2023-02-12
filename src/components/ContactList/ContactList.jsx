import { Box } from "components/Box";
import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ contacts, onDeleteContact, children }) => {
    return (
        <Box
            as="ul"
            p={4}
            minHeight="contactListMinHeigth"
        >{children}
            <ContactItem contacts={contacts} onDeleteContact={onDeleteContact}/>
        </Box>
    );
};