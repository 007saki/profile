



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
    <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Grid2 bgcolor={'lightgreen'} height={'80vh'} component={Paper} elevation={2} p={4}>
            <Typography textAlign={'center'} variant="body1" sx={{fontFamily:"'Courier New',monospace",color:'#333', }}>Experience</Typography>
            <Typography textAlign={'center'} variant="h4" color="inherit" fontFamily={'fantasy'}>8 Years</Typography>
            <Divider/>
            {capitalize.map(data =><Typography key={data} variant="body1" sx={{fontFamily:'sans-serif',color:'#333', display:'flex'}}><ArrowRightOutlined/>{data}</Typography>)}
        </Grid2>
    </Grid2>
  )
}

export default StackCard1