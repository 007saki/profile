

export const postQualification=async(
    qualification_name:string,
    qualification_category:string,
    qualification_typ:string,
    _year:number,
    institution_details:number,
)=>{
    try {
        //validate
        if(!qualification_name||!qualification_category||!qualification_typ||!_year||!institution_details){
            alert('Required Field can not be empty')
        }
        //store
        const values = {qualification_name,qualification_category,qualification_typ,_year,institution_details}
        //send
        const response = await fetch(`http://localhost:3000/api/qualification`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        });
        if(!response.ok){alert('Response from the server is no ok')}
    } catch (error) {
        throw new Error ('POST TO BACKEND FAILED')
    }
}