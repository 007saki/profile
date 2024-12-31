
import { Grid2, FormControl, FormLabel, FormGroup, FormHelperText, TextField, Paper } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { EducationForm } from './form'

export type educationProps = {
    id:number,
    institution_name:string,
    address:string,
    contact:string,
    description:string,	
}


//Define Post Object
export const postEducation=async(
    id:number,
    institution_name:string,
    address:string,
    contact:string,
    description:string,	
)=>{
    try {
        //validate
        if(!institution_name || !address || !contact || description){
            throw new Error(`Required field should not be empty`)
        }
        //store value
        const storeValue = {institution_name,address,contact,description}
        //send
        const response = await fetch (`http://localhost:3001/api/education`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(storeValue)
        })
        if(response.ok){alert('RESPONSE IS OK, POST SUCCESSFUL')}
    } catch (error) {
        throw new Error(`Fail TO POST`)
    }
}




const Education = () => {
    //id	institution_name	address	contact	description	
    const handlePost=()=>{
        
    }

  return (
    <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'center'} p={1} height={'100%'}>
        <Grid2 component={Paper} elevation={12}>
            {<EducationForm/>}
        </Grid2>
    </Grid2>
  )
}

export default Education