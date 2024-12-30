import { Box, Grid2, List, ListItem, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Home = () => {

  //Define Home Object
  const HomeApp = {
    name: 'Home',
    version: '1.0.0',

    Biography: function(){
      return(
        <Grid2>
          <Typography variant="h6" color="primary" fontFamily={'monospace'}>Biography</Typography>
          <Typography variant="body1"  fontFamily={'sans-serif'}>
            My name is Sakiasi Baleiwai and I am a web developer specializing in Next.js which is a Javascript Framework
            used to build responsive, interactive and highly optimized web application. I have spent over 7 years in the ICT industry handling various services ranging from backend to
            client-side configuration. Since July of 2024 I have decided to study Programming with the aim of building web and mobile application that meets industry standard.
          </Typography> <br />
          <Typography variant="body1"  fontFamily={'sans-serif'}>
            This website is my portfolio that serves as a proof of concept where everything I have learnt is begin showcased here. The source code of this entire site can be fetched from 
            my github repository {<Link style={{color:'blue', fontStyle:'italic'}} target='_blank' rel='noopener noreferrer'  href={'https://github.com/007saki/portfolio.git'}>https://github.com/007saki/portfolio.git</Link>}
          </Typography>
        </Grid2>
      )},

    //Home Menu
    menu: {
      main: ['Education', 'Experience', 'Achievement', 'skills', ]
    },

    getMenu: function(){
      return (
        <Grid2>
          {this.menu.main.map((menus,index) => 
            <List key={index}>
              <ListItem sx={{cursor:'pointer','&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)', // Light gray background on hover
                transform: 'scale(1.05)', // Slightly scale up the item on hover (optional)
                borderRadius:5,
                },}}>
                {menus}
                </ListItem>
            </List>
          )}
        </Grid2>
      )
    }
  }

  return (
    <Grid2 container display={'flex'} p={1} height={'100%'}>
      <Grid2 container gap={2} p={1} display={{md:'flex', sm:'none', xs:'none'}}>
        <Grid2 display={'flex'} flexDirection={'column'} size={{md:'auto'}} p={2} component={Paper} elevation={12}>
          <Box flexGrow={1} display={'flex'} flexDirection={'column'}>
            {HomeApp.getMenu()}
          </Box>
          <Box>
            <Typography  variant="caption" color="primary" fontFamily={'monospace'}>{` ${HomeApp.name} version: ${HomeApp.version} `}</Typography> <br />
          </Box>
        </Grid2>
        <Grid2 size={{md:'grow'}}>
          {HomeApp.Biography()}
        </Grid2>
        <Grid2 size={{md:'grow'}}>

        </Grid2>
      </Grid2>
    </Grid2>
  )

}

export default Home