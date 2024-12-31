
'use client'
import { FormControl, Grid2, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { educationProps } from "./page"
import { isValid, z } from "zod"


//Define Education Form
export const EducationForm=()=>{

    const [education, setEducation] = useState<educationProps>({
        id:0,
        institution_name:'',
        address:'',
        contact:'',
        description:'',
    });

    const handlechange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target
        setEducation(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSchema = {
        institution_name: z.string().max(150, 'Max. 150 characters').nonempty('Institution is required'),
        address: z.string().max(150, 'Max. 150 characters').nonempty('Address is required'),
        contact: z.string().nonempty('Contact is required'),
        description: z.string().max(255, 'Max. 255 Char').nonempty('description is required'),
    }

    const validateField =(key:any, value:any)=>{
        const schema = handleSchema [key as keyof typeof handleSchema]
        if (schema) {
            const result = schema.safeParse(value)
            return {
                isValid: result.success,
                errorMessage: result.success ? '' : result.error.errors[0]?.message,
            }
        } 
        return {
            isValid: true,
            errorMessage: ''
        }
    }

    return (
        <Grid2 p={2} display={'flex'} flexDirection={'column'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            {Object.entries(education).map(([key,value]) =>
                {const validation = validateField(key,value);
                return (
                <Grid2
                    gap={2}
                    key={key}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    p={1}
                    justifyContent={'center'}>
                    
                        <TextField
                            disabled={key==='id'?true:false}
                            variant='standard'
                            id={key}
                            label={`Enter ${key}`}
                            value={value}
                            onChange={handlechange}
                            name={key}
                            helperText={validation.errorMessage}
                            required
                            error={!validation.isValid}
                        />
                </Grid2>)}
            )}
            <pre>{JSON.stringify(education,null,2)}</pre>
        </Grid2>
    )
}