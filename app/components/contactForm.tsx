



'use client'
import { Button, Grid2, Paper, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { messengerType } from '../types/types'
import { postMessenger } from '../apiUtility/messengerServices'

const initialMessenger:messengerType={
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  _status: 'Pending',
}

const ContactForm = () => {
  const [messenger, setMessenger] = useState<messengerType>(initialMessenger)  
  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=event.target;
    setMessenger(prev=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit=()=>{
    if(!messenger.name||!messenger.email||!messenger.phone||!messenger.subject){
      alert('Required field should not be empty')
      return
    }
    postMessenger(
      messenger.name,
      messenger.email,
      messenger.phone,
      messenger.subject,
      messenger.message,
      messenger._status,
    );
    setMessenger(initialMessenger)
  }

  return (
    <Grid2
      container
      height={"100%"}
      p={2}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid2
        p={2}
        display={"grid"}
        gap={1}
        component={Paper}
        size={3}
        height={"100%"}
        elevation={12}
        overflow={"auto"}
      >
        {Object.entries(messenger).map(([key, value]) => (
          <Grid2 display={'grid'} gridTemplateColumns={'1fr 1fr'} key={key} >
            <TextField
              key={key}
              name={key}
              rows={key === "message" ? 3 : 1}
              multiline={key === "message" ? true : false}
              id={key}
              label={key}
              value={value}
              onChange={handleChange}
              variant={key === "message" ? "filled" : "standard"}
              disabled={
                key === "id"
                  ? true
                  : key === "_status"
                  ? true
                  : key === "_date"
                  ? true
                  : false
              }
              required={
                key === "name"
                  ? true
                  : key === "email"
                  ? true
                  : key === "phone"
                  ? true
                  : key === "subject"
                  ? true
                  : false
              }
            />
          </Grid2>
        ))}
        <Grid2>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          <pre>{JSON.stringify(messenger, null, 2)}</pre>
        </Grid2>
      </Grid2>
    </Grid2>
  );

}

export default ContactForm