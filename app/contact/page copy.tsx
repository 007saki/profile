

'use client'
import { OpenInNew } from '@mui/icons-material';
import { Box, Button, Divider, Grid2, TextField, Typography } from '@mui/material'
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react'
import { contactProps, createMessage } from '../services/contacts';

const Contact = () => {
  const [message, setMessage] = useState<contactProps>({
      name:'',
      email:'',
      phone_contact:'',
      message:'',
  })

  const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
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
    <Grid2
      height={"100%"}
    >
      <Grid2 width={'30%'} height={'100%'} color={'lightblue'}>
        <Typography bgcolor={'black'} color='white' p={1} variant='h6'>You can reach me on any of my contact below</Typography>
        <Box p={3} bgcolor={'lightblue'}>
          {/* For live chat  */}
          <Typography color="blue">Viber Number:</Typography>
          <Typography color="primary">+679 9182317</Typography>
          <Divider />
          {/* LinkedIn */}
          <Typography color="blue">LinkedIn:</Typography>
          <Typography href={'https://www.linkedin.com/in/sakiasi-komaidrakulu-915b2215a/'} component={Link} color="primary">Check Out my LinkedIn <OpenInNew fontSize='small'/></Typography>
          <Divider />
          {/* WhatsApp */}
          <Typography color="blue">WhatsApp:</Typography>
          <Typography color="primary"> +679 9182317</Typography>
          <Divider />
          <Typography color="blue">Email:</Typography>
          <Typography href={'mailto:saki.baleiwai.komai@gmail.com'} component={Link} color="primary"> saki.baleiwai.komai@gmail.com</Typography>
          <Divider />
        </Box>

      </Grid2>
      <Grid2 width={'50%'} bgcolor={'lightgreen'}>
        <Typography p={1} bgcolor={'black'} color='white' fontFamily={'sans-serif'} variant='h6'>You can leave your message here:</Typography>
        <Box p={5}>
          <TextField onChange={handleChange} fullWidth sx={{mt:1}} variant='standard' label='Name'  value={message.name} name='name'/> <br />
          <TextField onChange={handleChange} fullWidth sx={{mt:1}} variant='standard' label='Email (Optional)' value={message.email} name='email'/> <br />
          <TextField onChange={handleChange} fullWidth sx={{mt:1}} variant='standard' label='Phone Contact (Optional)' value={message.phone_contact} name='phone_contact'/> <br />
          <TextField onChange={handleChange} fullWidth sx={{mt:1}} multiline rows={3} variant='standard' label='Message' value={message.message} name='message'/> <br />
          <Button onClick={handleSubmit} sx={{justifyContent:'end'}}>Send</Button>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default Contact