import { portfolioDB } from "@/app/lib/mysql"
import { NextRequest, NextResponse } from "next/server"


export const GET=async()=>{
    try {
        const [response] = await portfolioDB.query('SELECT * FROM messenger')        
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({message:`FAIL TO GET DATA: ${error}`})
    }
}

export const POST = async (request: NextRequest) => {
    try {
    const { name, email, phone, subject, message, _status } = await request.json();
      const query = `INSERT INTO messenger (name,email,phone,subject,message,_status) VALUES (?,?,?,?,?,?)`
      const values = [name,email,phone,subject,message,_status];
      await portfolioDB.query(query,values);
      return NextResponse.json({ message: `POST SUCCESSFUL` });
    } catch (error) {
      return NextResponse.json({ message: `FAIL TO POST: ${error}` });
    }
  };
  