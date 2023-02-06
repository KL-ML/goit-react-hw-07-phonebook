import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nameAction, numberAction, resetNameAction, resetNumberAction } from "redux/contactForm/form.slice";
import { Box } from '../Box';

export const ContactForm = ({ onSubmit }) => {
    const dispatch = useDispatch();

    const name = useSelector(state => state.form.name);
    const number = useSelector(state => state.form.number);

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                dispatch(nameAction(value));
                break;
            case 'number':
                dispatch(numberAction(value));
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit({ name: name, number: number });
        reset();
    };

    const reset = () => {
        dispatch(resetNameAction());
        dispatch(resetNumberAction());
    };

    return (
        <Box
            as="form"
            bg="background"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden"
            p={4}
            display="flex"
            flexDirection="column"

            onSubmit={handleSubmit}>
            <Box
                as="label"
                display="flex"
                flexDirection="column"
                mb={3}
            >
                Name
                <Box
                    as="input"
                    mt={3}
                    p={2}
                    border="none"
                    boxShadow="shadowStats"
                    borderRadius="normal"
                    fontFamily="body"
                    color="text"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </Box>
            <Box
                as="label"
                display="flex"
                flexDirection="column"
                mb={4}
            >
                Number
                <Box
                    as="input"
                    mt={3}
                    p={2}
                    border="none"
                    boxShadow="shadowStats"
                    borderRadius="normal"
                    fontFamily="body"
                    color="text"

                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </Box>
            <Box
                as="button"
                border="none"
                boxShadow="buttonShadow"
                borderRadius="normal"
                bg="secondary"
                color="light"
                fontFamily="body"
                p={2}
                type='submit'>
                Add contact
            </Box>
        </Box>
    );
};