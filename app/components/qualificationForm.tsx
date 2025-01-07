

'use client'
import React, { ChangeEvent, useState } from 'react'
import { qualificationType } from '../types/types'
import { Button, Grid2, Paper, TextField } from '@mui/material'
import { postQualification } from '../apiUtility/qualificationServices'

//define initial object
const initialQualification:qualificationType={
    qualification_name:'',
    qualification_category:'',
    qualification_typ:'',
    _year:2024,
    institution_details:1,
}

const QualificationForm = () => {
    const [qualification, setQualification] = useState(initialQualification)

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target;
        setQualification(prev=>({
            ...prev,
            [name]:value,
        }))
    }

    const handleSubmit=()=>{
        if(!qualification.qualification_name||!qualification.qualification_category||!qualification.qualification_typ||!qualification._year){
            alert(`Required field should not be empty`)
        }
        postQualification(
            qualification.qualification_name,
            qualification.qualification_category,
            qualification.qualification_typ,
            qualification._year,
            qualification.institution_details,
        )
        setQualification(initialQualification)
    }

  return (
    <Grid2 container height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Grid2 display={'flex'} flexDirection={'column'} gap={2} p={2} component={Paper} elevation={12} >
            {Object.entries(qualification).map(([key,value]) =>
            <TextField
            name={key}
              key={key}
              id={key}
              label={key}
              value={value}
              onChange={handleChange}
              variant='standard'
            />  
            )}
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            <pre>{JSON.stringify(qualification,null,2)}</pre>
        </Grid2>
    </Grid2>
  )
}

export default QualificationForm