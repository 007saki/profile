

//Define Post Institution Object
export const postInstitution=async(
    id:number,
    institution_name:string,
    address:string,
    contact:string,
    description:string,
    )=>{
    //validate
    if(!institution_name||!address||!contact||!description){throw new Error (`Required field should not be empty`)}
    //store
    const value = {institution_name,address,contact,description}
    //send
    try {
    const response = await fetch(`http://localhost:3000/api/institution`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(value)
        })
        if(!response.ok){throw new Error('RESPONSE FROM THE SERVER IS NOT OK')}
        
    } catch (error) {
        throw new Error (`INSTITUTION POST FAILED`)
    }
    }