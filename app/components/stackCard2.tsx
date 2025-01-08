



import { ArrowRightOutlined } from '@mui/icons-material'
import { Divider, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'

const hardSkills = [
  'Programming using JavaScript',
  'databases using MySQL',
  'Building responsive web applications',
  'Specializing in Next.js',
  'interactive user interfaces using React',
  'Integrating backend APIs with frontend applications',
  'authentication and authorization',
  'Optimizing web performance',
  'RESTful APIs using Node.js',
  'Working with modern CSS frameworks',
  'Secure web applications',
  'Git and GitHub for version control',
  'Built for all devices and screen sizes',
  'Writing clean, maintainable, and reusable code',
]

export const StackCard2:React.FC = () => {
    const capitalize = hardSkills.map(data => {return data.charAt(0).toUpperCase() + data.slice(1)})

  return (
    <Grid2>
        <Grid2 height={600} bgcolor={'lightpink'} component={Paper} elevation={2} p={2}>
            <Typography noWrap textAlign={'center'} variant="body1" sx={{fontFamily:"'Courier New',monospace",color:'#333', }}>Skills</Typography>
            <Typography noWrap textAlign={'center'} variant="h4" color="inherit" fontFamily={'fantasy'}>Hard Skills</Typography>
            <Divider/>
            {capitalize.map(data =><Typography noWrap key={data} variant="body1" sx={{fontFamily:'sans-serif',color:'#333', display:'flex'}}><ArrowRightOutlined/>{data}</Typography>)}
        </Grid2>
    </Grid2>
  )
}

export default StackCard2