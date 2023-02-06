import React from "react";
import { Box } from "components/Box";

export const ContactItem = ({ contacts, onDeleteContact }) => {
    return (<>
        {contacts.map(({ name, id, number }) => (
            <Box
                as="li"
                display="flex"
                justifyContent="space-between"
                mb={2}
                key={id}>
                {name}: {number}
                <Box
                    as="button"
                    border="none"
                    boxShadow="buttonShadow"
                    borderRadius="normal"
                    bg="secondary"
                    color="light"
                    fontFamily="body"
                    fontSize={0}
                    py={1}
                    px={2}
                    type="button"
                    onClick={() => onDeleteContact(id)}
                >
                    Delete
                </Box>
            </Box>
        ))}
    </>)
};