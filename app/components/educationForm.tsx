


'use client'
import { Button, Grid2, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { postEducation } from "../apiUtility/educationServices";
import { educationType } from "../types/types";

//Education Initial
const initialEducation:educationType = {
  id:0, institution_name:'', address:'', contact:'',description:''
}

//Define Education Form
export const EducationForm=()=>{

    const [education, setEducation] = useState<educationType>(initialEducation);

    const handlechange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = event.target
        setEducation(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=()=>{
      postEducation(
       education.id,
        education.institution_name,
        education.address,
        education.contact,
        education.description,
      )
      setEducation(initialEducation)
    }

    return (
        <Grid2 p={1}>
            {Object.entries(education).map(([key,value]) =>
                {
                  return (
                    <Grid2 key={key} p={1}>
                      <TextField
                        fullWidth
                        disabled={key === "id" ? true : false}
                        variant={key === "description" ? "filled" : "standard"}
                        id={key}
                        label={`Enter ${key}`}
                        value={value}
                        onChange={handlechange}
                        name={key}
                        helperText={[
                          key === "description"
                            ? `Required * | Max. 255 | Char ${
                                value.toString().length
                              }`
                            : ``,
                          key === "institution_name"
                            ? `Required. | Max. 150 Char ${
                                value.toString().length
                              }`
                            : ``,
                          key === "address"
                            ? `Required. Max. 150 | Char ${
                                value.toString().length
                              }`
                            : ``,
                          key === "contact"
                            ? `Required. Max. 150 | Char ${
                                value.toString().length
                              }`
                            : ``,
                        ]}
                        multiline={key === "description" ? true : false}
                        rows={key === "description" ? 4 : 0}
                        required
                        error={
                          key === "description" &&
                          /[ae]+@[a-zA-Z][./]/.test(value.toString()) &&
                          value.toString().length > 3
                            ? false
                            : true
                        }
                      />
                    </Grid2>
                  );
                }
              )}
              <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid2>
    )
}