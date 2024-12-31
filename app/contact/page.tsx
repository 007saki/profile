<<<<<<< HEAD
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          bgcolor: '#f9f9f9', // Light background for a subtle contrast
          padding: 3,
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, color: 'text.secondary' }}>
          I would love to hear from you! Feel free to send me your emails.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'medium',
            color: 'primary.main',
          }}
        >
          <a
            href="mailto:saki.baleiwai.komai@gmail.com"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            saki.baleiwai.komai@gmail.com
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
=======




import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact
>>>>>>> d7d87378e6dd09ecbf66ca5658dad6c6ec43a6e2
