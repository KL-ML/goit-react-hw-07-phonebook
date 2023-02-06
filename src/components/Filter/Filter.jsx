import React from "react";
import { Box } from '../Box';

export const Filter = ({onChange, value}) => {
    return (
        <Box
            p={4}
            display="flex"
            flexDirection="column"
        >
            Find contacts by name
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
                value={value}
                onChange={onChange} />
        </Box>
    );
}