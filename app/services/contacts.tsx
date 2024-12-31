import { NextResponse } from "next/server";


export interface contactProps{
    name:string;
    email:string;
    phone_contact:string;
    message:string;
}

export const createMessage=async(Message:contactProps)=>{
  try {
    const { name, email, phone_contact, message } = Message;
      //validate
      if(!name||! message) {throw new Error(`Required field should not be null`)}
      //store value
      const storeValue = {name, email, phone_contact, message}
      //send
      const response = await fetch(`http://localhost:3000/api/contact`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(storeValue)
      })
      if(!response.ok){throw new Error(`Response from the endpoint is not ok`)}
  } catch (error) {
    return NextResponse.json(error)
  }
}