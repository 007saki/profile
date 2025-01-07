

'use client'
import { Button, Grid2, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { institutionType } from "../types/types";
import { postInstitution } from "../apiUtility/institutionServices";


//Institution Initial
const initialInstitution:institutionType = {
    id:0,
    institution_name:'',
    address:'',
    contact:'',
    description:''
  
  }
  
  //Define Institution Form
  export const InstitutionForm = ()=>{
    const [institution, setInstitution] = useState(initialInstitution);
  
    const handleSubmit=()=>{
      if(!institution.institution_name || !institution.address){
        alert('Required field can not be empty')
        return
      }
  
      postInstitution(
        institution.id,
        institution.institution_name,
        institution.address,
        institution.contact,
        institution.description,
      )
      setInstitution(initialInstitution)
    }
  
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
      const{name,value} = event.target
      setInstitution(prev=>({
        ...prev,
        [name]:value
      }))
    }
  
    return(
        <Grid2 display={'flex'} flexDirection={'column'} gap={2} container p={2} >
          {Object.entries(institution).map(([key,value])=>
            <Grid2  gap={2} key={key}>
              <TextField
                multiline={ key==='description'?true:false}
                rows={key==='description'?3:''}
                fullWidth
                variant={key==='description'?'filled':'standard'}
                id={key}
                label={key}
                value={value}
                onChange={handleChange}
                name={key}
                disabled={key === 'id' ? true:false}
                helperText={[
                  key==='description'?`Max. 255 char | ${value.toString().length} char`:'' ,
                  key==='address'? 'Required':'',
                  key==='institution_name'?'Required':'',
                ]}
                error={
                  key==='address'?value.toString().length===0:false ||
                  key==='institution_name'?value.toString().length===0:false
                }
                required={
                  key==='address' || 
                  key==='institution_name'
                }
                />
                
            </Grid2>
          )}
          <Grid2>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Grid2>
          {JSON.stringify(institution,null,2)}
      </Grid2>
    )
  
  }