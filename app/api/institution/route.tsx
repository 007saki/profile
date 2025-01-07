import { portfolioDB } from "@/app/lib"
import { NextRequest, NextResponse } from "next/server"

export const GET=async()=>{
    try {
        const [response] = await portfolioDB.query(`SELECT * FROM institution`)
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({message:`Failed to fetch data`})
    }
}

export const POST=async(request:NextRequest)=>{
    try {
        const {institution_name,address,contact,description} = await request.json()
        const value = [institution_name,address,contact,description]
        const query = `INSERT INTO institution (institution_name,address,contact,description) VALUES (?,?,?,?)`
        await portfolioDB.query(query,value)
        return NextResponse.json({message:`INSERT TO INSTITUTION SUCCESSFUL`})
    } catch (error) {
        return NextResponse.json({message:`FAILED TO POST:${error}`})
    }
}