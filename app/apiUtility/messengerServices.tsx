


export const postMessenger=async(
    name:string,
    email:string,
    phone:string,
    subject:string,
    message:string,
    _status:string,
)=>{

    //validate
    if(!name||!email||!phone||!subject||!message||!_status){throw new Error(`REQUIRED FIELD SHOULD NOT BE EMPTY`)}

    //store
    const StoreValues = {name,email,phone,subject,message,_status}; 

    //send
    try {
        const response = await fetch(`http://localhost:3000/api/messenger`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(StoreValues),
        })
        if(!response.ok){throw new Error(`RESPONSE FROM THE SERVER IS NOT OK`)}
    } catch (error) {
        throw new Error(`FAIL TO POST TO ENDPOINT: ${error}`)
    }

}