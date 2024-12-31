import { portfolioDB } from "@/app/lib/mysql"
import { NextRequest, NextResponse } from "next/server"


export const GET=async()=>{
    try {
        const [response] = await portfolioDB.query(`SELECT * FROM education`)
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(`${error}`)
    }
}

//id	institution_name	address	contact	description	

export const POST=async(request:NextRequest)=>{
    try {
        const {institution_name, address, contact, description} = await request.json();
        const value = [institution_name, address, contact, description]
        const query = `INSERT INTO education (institution_name, address, contact, description) VALUE (?,?,?,?)`
        portfolioDB.query(query,value)
        return NextResponse.json({message:`INSERT SUCCESSFUL`})
    } catch (error) {
        return NextResponse.json({message:`INSERT FAIL: ${error}`})
    }
}