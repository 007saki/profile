



import { ArrowRightOutlined } from '@mui/icons-material'
import { Divider, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'

const experience = [
    'Manage and maintain servers',
    'Monitor system performance and availability',
    'Install and configure hardware and software',
    'Manage user accounts and access permissions',
    'Perform regular system backups',
    'Troubleshoot system and network issues',
    'Ensure system security and updates',
    'Set up and manage virtual machines',
    'Manage firewalls and antivirus solutions',
    'Document system configurations and procedures',

]

export const StackCard1:React.FC = () => {
    const capitalize = experience.map(data => {return data.charAt(0).toUpperCase() + data.slice(1)})

  return (
    <Grid2>
        <Grid2 height={600} bgcolor={'lightgreen'} component={Paper} elevation={2} p={2}>
            <Typography textAlign={'center'} variant="body1" sx={{fontFamily:"'Courier New',monospace",color:'#333', }}>Hands-on Experience</Typography>
            <Typography textAlign={'center'} variant="h4" color="inherit" fontFamily={'fantasy'}>8 Years in </Typography>
            <Divider/>
            {capitalize.map(data =><Typography noWrap key={data} variant="body1" sx={{fontFamily:'sans-serif',color:'#333', display:'flex'}}><ArrowRightOutlined/>{data}</Typography>)}
        </Grid2>
    </Grid2>
  )
}

export default StackCard1