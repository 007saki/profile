

import { AppRegistration, Engineering, School } from '@mui/icons-material'
import { Button, Grid2,  Typography, ButtonGroup, Stack, Paper } from '@mui/material'
import React from 'react'
import TxtTyping from '../components/textTyping'
import StackCard1 from '../components/stackCard'
import StackCard2 from '../components/stackCard2'
import StackCard3 from '../components/stackCard3'

const text = [
  'Welcome to my website',
  'Checkout my portfolio',
  'Let\'s build something great!']

const PortfolioHome = () => {
  return (
    <Grid2  gap={2} container display={'flex'} alignItems={'start'} justifyContent={'start'}>
      <Grid2 height={{md:700}} flexDirection={{md:'row',sm:'row'}} alignItems={'center'} justifyContent={'center'} size={12} container display={'flex'}>
          <Grid2 gap={3} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} p={5} size={{xs:12,sm:12,md:6}}>
              <Typography fontFamily={'fantasy'} variant="h2" color='warning'>SAKIASI B. KOMAI</Typography>
              <Grid2 height={100} display={'flex'} alignItems={'center'} >
                <TxtTyping text={text} />
              </Grid2>
              <ButtonGroup variant="text" color="primary">
                <Button sx={{gap:1}}>Qualification{<School/>}</Button>             
                <Button sx={{gap:1}}>Experience <Engineering/></Button>              
                <Button>Projects <AppRegistration/></Button>              
              </ButtonGroup>
          </Grid2>
          <Grid2 padding={5} display={'flex'} alignItems={'center'} justifyContent={'center'} p={1} size={{xs:12,sm:12,md:6}} >
            <Grid2 p={2} component={Paper} elevation={5}>
              <img height={300} src="/sakiasi.JPG" alt="sakiasi" />
            </Grid2>
        </Grid2>
      </Grid2>
        <Stack component={Grid2} width={'100%'} display={'flex'} justifyContent={'center'}  p={4} spacing={1} direction={{md:'row',sm:'column',xs:'column'}}>
         <StackCard1/>
         <StackCard2/>
         <StackCard3/>
        </Stack>
        <Grid2 bgcolor={'lightcyan'} size={12}>
          test
        </Grid2>
    </Grid2>
  )
}

export default PortfolioHome