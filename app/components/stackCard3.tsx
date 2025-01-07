



import { ArrowRightOutlined } from '@mui/icons-material'
import { Divider, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'

const hardSkills = [
  'Certificate in Android Development',
  'Certificate in Web Application Development',
  'Certificate in Digital Forensics',
  'Certificate in Programming',
]

export const StackCard3:React.FC = () => {

    const capitalize = hardSkills.map(data => {return data.charAt(0).toUpperCase() + data.slice(1)})
  return (
    <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Grid2 bgcolor={'lightskyblue'} height={'80vh'} component={Paper} elevation={2} p={4}>
            <Typography textAlign={'center'} variant="body1" sx={{fontFamily:"'Courier New',monospace",color:'#333', }}>Qualification</Typography>
            <Typography textAlign={'center'} variant="h4" color="inherit" fontFamily={'fantasy'}>Certification</Typography>
            <Divider/>
            {capitalize.map(data =><Typography key={data} variant="body1" sx={{fontFamily:'sans-serif',color:'#333', display:'flex'}}><ArrowRightOutlined/>{data}</Typography>)}
        </Grid2>
    </Grid2>
  )
}

export default StackCard3