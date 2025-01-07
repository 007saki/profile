



'use client'
import { Close } from '@mui/icons-material'
import { Box, Button, Grid2, Modal, Paper, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'

const TestModal = () => {

    const [open, setOpen] = useState(false)

    const handleOpen=()=>{
        setOpen(prev=>!prev)
    }

  return (
    <Grid2
      container
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onClose={handleOpen} open={open}>
        <Grid2 display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
          <Grid2 width={'80%'} height={'80%'} display={"flex"} component={Paper} p={1}>
                <Grid2 display={'flex'} alignItems={'start'} justifyContent={'end'} width={'100%'}><IconButton aria-label="close" onClick={handleOpen}><Close color='error'/></IconButton></Grid2>
                <Typography variant="h5" sx={{ fontFamily: "'Courier New',monospace", color: "#333", fontSize: "1.5rem",}}>
            </Typography>
          </Grid2>
        </Grid2>
      </Modal>
    </Grid2>
  );
}

export default TestModal