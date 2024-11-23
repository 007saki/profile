import { AccountCircle, Email as EmailIcon, Send as SendIcon, Clear as ClearIcon } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Container, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography color='primary' variant="h4">
          Contact Me
        </Typography>
        <Divider sx={{ my: 2, mx: 'auto', width: '50%' }} />
      </Box>
      
      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <ButtonGroup
          fullWidth
          variant="contained"
          sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}
        >
          <Button startIcon={<SendIcon />} color="primary">
            Send
          </Button>
          <Button startIcon={<ClearIcon />} color="secondary">
            Clear
          </Button>
        </ButtonGroup>
      </Stack>
    </Container>
  );
};

export default Contact;
