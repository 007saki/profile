
'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { OpenInNew, TextFieldsRounded } from '@mui/icons-material';
import { contactProps, createMessage } from '../services/contacts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  const [message, setMessage] = React.useState<contactProps>({
    name:'',
    email:'',
    phone_contact:'',
    message:'',
})

const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
  const {name,value} = e.target;
  setMessage(prev=>({
    ...prev,
    [name]:value
  }))
}

const handleSubmit=()=>{
  createMessage(message)
  setMessage({
    name:'',
    email:'',
    phone_contact:'',
    message:'',
  })

}
  return (
    <Grid container>
      {/* MOBILE LEFT-SIDEBAR */}
      <Grid display={{ xs: "grid", sm: "grid", md: "none" }} size={12} p={2}>
        <Item sx={{ bgcolor: "lightblue" }}>
          <Typography bgcolor={"black"} color="white" p={1} variant="h6">
            You can reach me on:
          </Typography>
          <Box p={3} bgcolor={"lightblue"}>
            {/* For live chat  */}
            <Typography color="blue">Viber Number:</Typography>
            <Typography color="primary">+679 9182317</Typography>
            <Divider />
            {/* LinkedIn */}
            <Typography color="blue">LinkedIn:</Typography>
            <Typography
              href={
                "https://www.linkedin.com/in/sakiasi-komaidrakulu-915b2215a/"
              }
              component={Link}
              color="primary"
            >
              Check Out my LinkedIn <OpenInNew fontSize="small" />
            </Typography>
            <Divider />
            {/* WhatsApp */}
            <Typography color="blue">WhatsApp:</Typography>
            <Typography color="primary"> +679 9182317</Typography>
            <Divider />
            <Typography color="blue">Email:</Typography>
            <Typography
              href={"mailto:saki.baleiwai.komai@gmail.com"}
              component={Link}
              color="primary"
            >
              saki.baleiwai.komai@gmail.com
            </Typography>
            <Divider />
          </Box>
        </Item>
      </Grid>
      {/* DESKTOP LEFT-SIDEBAR */}
      <Grid
        borderRight={'1px solid gray'}
        height={"90vh"}
        flexDirection={'column'}
        display={{ xs: "none", sm: "none", md: "flex" }}
        size={{ sm: 2, md: 3 }}
      >
        <Typography bgcolor={"black"} color="white" p={1} variant="h6">
            You can reach me on:
          </Typography>
        <Box p={3}>
          {/* For live chat  */}
          <Typography color="blue">Viber Number:</Typography>
          <Typography color="primary">+679 9182317</Typography>
          <Divider sx={{mb:2}} />
          {/* LinkedIn */}
          <Typography color="blue">LinkedIn:</Typography>
          <Typography
            href={"https://www.linkedin.com/in/sakiasi-komaidrakulu-915b2215a/"}
            component={Link}
            color="primary"
          >
            Check Out my LinkedIn <OpenInNew fontSize="small" />
          </Typography>
          <Divider sx={{mb:2}} />
          {/* WhatsApp */}
          <Typography color="blue">WhatsApp:</Typography>
          <Typography color="primary"> +679 9182317</Typography>
          <Divider sx={{mb:2}} />
          <Typography color="blue">Email:</Typography>
          <Typography
            href={"mailto:saki.baleiwai.komai@gmail.com"}
            component={Link}
            color="primary"
          >
            saki.baleiwai.komai@gmail.com
          </Typography>
          <Divider sx={{mb:2}} />
        </Box>
      </Grid>
      {/* MOBILE CONTENT */}
      <Grid display={{ xs: "flex", sm: "flex", md: "none" }} size={12} p={2}>
        <Item sx={{ bgcolor: "lightgreen", width: "100%" }}>
          <Typography
            p={1}
            bgcolor={"black"}
            color="white"
            fontFamily={"sans-serif"}
            variant="h6"
          >
            You can leave your message here:
          </Typography>
          <TextField
            onChange={handleChange}
            fullWidth
            sx={{ mt: 1 }}
            variant="standard"
            label="Name"
            value={message.name}
            name="name"
          />{" "}
          <br />
          <TextField
            onChange={handleChange}
            fullWidth
            sx={{ mt: 1 }}
            variant="standard"
            label="Email (Optional)"
            value={message.email}
            name="email"
          />{" "}
          <br />
          <TextField
            onChange={handleChange}
            fullWidth
            sx={{ mt: 1 }}
            variant="standard"
            label="Phone Contact (Optional)"
            value={message.phone_contact}
            name="phone_contact"
          />{" "}
          <br />
          <TextField
            onChange={handleChange}
            fullWidth
            sx={{ mt: 1 }}
            multiline
            rows={3}
            variant="standard"
            label="Message"
            value={message.message}
            name="message"
          />{" "}
          <br />
          <Button onClick={handleSubmit} sx={{ justifyContent: "end" }}>
            Send
          </Button>
        </Item>
      </Grid>
      {/* DESKTOP CONTENT */}
      <Grid
        alignItems={"center"}
        justifyContent={"center"}
        height={"90vh"}
        display={{ xs: "none", sm: "none", md: "flex" }}
        size={{ sm: 7 }}
      >
        <Box>
          <Typography
            p={1}
            bgcolor={"black"}
            color="white"
            fontFamily={"sans-serif"}
            variant="h6"
          >
            You can leave your message here:
          </Typography>
          <Item
            sx={{ width: "80vh", height: "50%", p: 5, bgcolor: "lightblue" }}
          >
            <TextField
              required
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Name"
              value={message.name}
              name="name"
            />{" "}
            <br />
            <TextField
              required
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Email"
              value={message.email}
              name="email"
            />{" "}
            <br />
            <TextField
              required
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Phone Contact"
              value={message.phone_contact}
              name="phone_contact"
            />{" "}
            <br />
            <TextField
              required
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              variant="standard"
              label="Message"
              value={message.message}
              name="message"
            />{" "}
            <br />
            <Button onClick={handleSubmit} sx={{ justifyContent: "end" }}>
              Send
            </Button>
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
}
